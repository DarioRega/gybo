<template>
  <div class="bg-primary relative overflow-hidden" :class="currentTheme">
    <navbar v-if="story.content" :blok="story.content" />
    <div class="fixed h-12 right-0" style="top: 8rem">
      <button @click="toggleTheme">Toggle</button>
    </div>
    <Nuxt class="pt-32" />
  </div>
</template>
<script>
import store, { setTheme } from '~/store'
export default {
  async fetch() {
    // // This what would we do in real project
    const version =
      this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
        ? 'draft'
        : 'published'

    // Load the JSON from the API - loadig the home content (index page)
    const data = await this.$nuxt.context.app.$storyapi
      .get(`cdn/stories/globals/navbar`, {
        version,
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          this.$nuxt.context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          this.$nuxt.context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
    this.story.content = data.story.content
  },
  data() {
    return {
      story: { content: {} },
    }
  },
  computed: {
    currentTheme() {
      return store.currentTheme
    },
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  methods: {
    toggleTheme() {
      if (this.currentTheme.includes('light')) {
        setTheme('theme-dusk')
      } else {
        setTheme('theme-light')
      }
    },
  },
}
</script>

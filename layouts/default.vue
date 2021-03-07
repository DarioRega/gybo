<template>
  <div class="bg-primary relative overflow-hidden" :class="currentTheme">
    <navbar v-if="story.content" :blok="story.content" />
    <Nuxt />
  </div>
</template>
<script>
import store, { setTheme } from '~/store'
import 'aos/dist/aos.css'

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
    this.getTheme()
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
    getTheme() {
      if (typeof window !== 'undefined') {
        const preferredTheme = this.hasThemePreferenceInStorage()
        if (preferredTheme) {
          return setTheme(preferredTheme)
        }

        let userBrowserTheme = 'theme-light'
        if (this.isUserUsingDarkBrowserMode()) {
          userBrowserTheme = 'theme-dusk'
        }
        setTheme(userBrowserTheme)
        window.localStorage.setItem('themeSelected', userBrowserTheme)
      }
    },
    hasThemePreferenceInStorage() {
      return window.localStorage.getItem('themeSelected')
    },
    isUserUsingDarkBrowserMode() {
      return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    },
  },
}
</script>

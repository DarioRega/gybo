<template>
  <div class="bg-primary relative overflow-hidden" :class="currentTheme">
    <navbar v-if="story.content" :blok="story.content" />
    <Nuxt />
  </div>
</template>
<script>
import store from '~/store'
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
    // const AOS = await import('aos')
    // AOS.init({
    //   once: true,
    //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    //   initClassName: 'aos-init', // class applied after initialization
    //   animatedClassName: 'aos-animate', // class applied on animation
    //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // })

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
}
</script>

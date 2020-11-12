<template>
  <div class="bg-primary relative overflow-hidden" :class="currentTheme">
    <div class="w-full container mx-auto md:w-11/12 lg:w-full">
      <navbar />
      <div class="fixed h-12 right-0" style="top: 8rem">
        <button @click="toggleTheme">Toggle</button>
      </div>
      <Nuxt class="pt-32" />
    </div>
  </div>
</template>
<script>
import store, { setTheme } from '~/store'
export default {
  computed: {
    currentTheme() {
      return store.currentTheme
    },
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

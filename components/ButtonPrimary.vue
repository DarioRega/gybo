<template>
  <button
    class="button-brand inline-block px-6 lg:px-8 py-4 border border-transparent font-semibold rounded-md transition duration-300 ease-in-out md:py-4 md:px-10"
    @click="navigate"
  >
    <slot />
  </button>
</template>

<script>
import { closeMenu } from '@/store'

export default {
  name: 'ButtonPrimary',
  props: {
    isNavigation: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    navigate() {
      if (this.isNavigation) {
        closeMenu()
        if (this.$i18n.locale === 'fr') {
          this.$router.push('/services')
        } else {
          this.$router.push(`/${this.$i18n.locale}/services`)
        }
      }
    },
  },
}
</script>

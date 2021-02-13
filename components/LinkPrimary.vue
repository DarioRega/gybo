<template>
  <nuxt-link
    :to="to ? to : ''"
    :alt="alt"
    class="link-brand transition duration-150 ease-in-out block rounded-md"
    @click.native="onClose"
  >
    <slot
  /></nuxt-link>
</template>

<script>
import { closeMenu } from '@/store'

export default {
  name: 'LinkPrimary',
  props: {
    to: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClose() {
      closeMenu()
    },
  },
}
</script>

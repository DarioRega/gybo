<template>
  <nuxt-link
    :to="to ? to : ' '"
    :alt="alt"
    class="link-brand transition duration-150 ease-in-out block rounded-md"
  >
    <slot
  /></nuxt-link>
</template>

<script>
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
}
</script>

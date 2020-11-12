<template>
  <nuxt-link
    to="/"
    class="link-brand text-secondary transition duration-150 ease-in-out block px-3 py-2 rounded-md font-semibold lg:font-normal"
  >
    <slot
  /></nuxt-link>
</template>

<script>
export default {
  name: 'LinkPrimary',
}
</script>

<template>
  <section class="container">
    <content-swap
      v-for="(item, index) in blok.items"
      :key="item._uid"
      :blok="item"
      :class="index > 0 ? 'py-12 md:py-16 lg:py-32' : 'pb-12 md:pb-16 lg:pb-32'"
    />
  </section>
</template>

<script>
export default {
  name: 'ContainerContentSwap',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('THISBLOK CONTAINER', this.blok)
  },
}
</script>

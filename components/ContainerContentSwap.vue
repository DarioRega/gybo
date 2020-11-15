<template>
  <section v-editable="blok" class="container section-spacer">
    <teaser
      v-for="item in blok.teaser"
      :key="item._uid"
      :blok="item"
      :is-nested="true"
    />
    <content-swap
      v-for="(item, index) in blok.items"
      :key="item._uid"
      :blok="item"
      :class="handleSpacing(index)"
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
  methods: {
    handleSpacing(index) {
      if (index === 0) {
        return 'pb-12 md:pb-16 lg:pb-32'
      }
      if (index === this.blok.items.length - 1) {
        return 'pt-12 md:pt-16 lg:pt-32'
      }
      return 'py-12 md:py-16 lg:py-32'
    },
  },
}
</script>

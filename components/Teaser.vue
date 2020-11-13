<template>
  <div v-editable="blok" class="teaser container py-16 mb-8 xl:py-36">
    <p class="text-tertiary caption-lg font-semibold tracking-wide uppercase">
      {{ blok.caption }}
    </p>
    <h2
      class="mt-4 lg:mb-6 xl:mb-10 xl:mb-2 font-extrabold tracking-tight text-primary"
    >
      {{ blok.headline }}
    </h2>
    <p v-if="blok.description">{{ blok.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Teaser',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

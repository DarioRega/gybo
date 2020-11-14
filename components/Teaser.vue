<template>
  <div
    v-editable="blok"
    class="teaser"
    :class="!isNested && 'container top-spacer mb-8'"
  >
    <p
      v-if="blok.caption"
      class="text-tertiary mb-4 caption-lg font-semibold tracking-wide uppercase"
    >
      {{ blok.caption }}
    </p>
    <h2
      class="font-extrabold tracking-tight text-primary"
      :class="!isNested && 'lg:mb-6 xl:mb-10 xl:mb-2'"
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
    isNested: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

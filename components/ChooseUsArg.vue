<template>
  <div
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-duration="600"
    :data-aos-delay="delay"
    :data-aos-anchor="anchor"
    data-aos-anchor-placement="top top"
  >
    <div
      class="flex items-center justify-center h-20 w-20 rounded-md bg-tertiary text-brand-light-gray"
    >
      <img
        :src="blok.image.filename"
        :alt="blok.title"
        class="w-full h-full testimonial__logo p-5"
      />
    </div>
    <div class="mt-5">
      <h4 class="font-extrabold text-primary">{{ blok.title }}</h4>
      <div class="mt-2 text-secondary rich-text" v-html="content_blok"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseUsArg',
  props: {
    blok: {
      type: Object,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    anchor: {
      type: String,
      required: true,
    },
  },
  computed: {
    content_blok() {
      return this.$storyapi.richTextResolver.render(this.blok.description)
    },
  },
}
</script>

<style scoped lang="scss">
.testimonial__logo {
  filter: invert(91%) sepia(10%) saturate(625%) hue-rotate(213deg)
    brightness(109%) contrast(96%);
}
</style>

<template>
  <article v-editable="blok">
    <div
      class="flex flex-col lg:items-center rounded-lg shadow-lg md:shadow-none overflow-hidden card-swap"
      :class="blok.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <div class="flex-shrink-0 lg:w-2/4 py-6">
        <object
          :data="blok.image"
          :class="
            blok.side === 'right' ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'
          "
          class="w-full object-cover md:w-4/5 md:max-w-sm xl:max-w-lg h-64 md:h-auto lg:h-auto mx-auto"
          type="image/svg+xml"
        >
          <img
            :src="blok.imageSupportOldNavs"
            :alt="blok.title"
            class="w-full object-cover md:w-4/5 md:max-w-sm xl:max-w-lg h-64 md:h-auto lg:h-auto mx-auto"
          />
        </object>
      </div>
      <div
        class="flex-1 md:flex-none lg:w-2/4 p-6 flex flex-col justify-between"
      >
        <div class="flex-1">
          <p
            class="text-tertiary caption-lg font-semibold tracking-wide uppercase"
          >
            {{ blok.caption }}
          </p>

          <h3 class="mt-1 font-semibold text-primary">{{ blok.title }}</h3>
          <div
            class="mt-4 text-secondary rich-text"
            v-html="content_blok"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ContentRightPictureLeft',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    content_blok() {
      return this.$storyapi.richTextResolver.render(this.blok.text)
    },
  },
}
</script>

<style scoped lang="scss">
.card-swap {
  @apply bg-secondary border border-primary;
  @screen md {
    @apply bg-transparent border-0;
  }
}
</style>

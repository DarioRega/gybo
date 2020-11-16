<template>
  <article>
    <div
      class="flex flex-col-reverse md:flex-row justify-start md:justify-between md:items-center lg:items-start"
    >
      <div class="md:w-9/12 flex-none mr-auto md:pr-12">
        <p
          class="text-tertiary mb-2 caption-lg font-semibold tracking-wide uppercase"
        >
          {{ blok.step + ' ' + stepNumber }}
        </p>
        <h4 class="mb-4 text-primary font-bold">{{ blok.title }}</h4>
        <div class="text-secondary rich-text" v-html="content_blok"></div>
      </div>
      <div class="w-24 md:w-40 md:ml-auto flex-none">
        <img
          :src="blok.iconSvg.filename"
          :alt="blok.title"
          :onerror="blok.iconSupportOldNavs.fileName"
          class="icon__step w-full h-full mb-6 md:mb-0 md:p-5"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProcessStep',
  props: {
    blok: {
      type: Object,
      required: true,
    },
    stepNumber: {
      type: [Number, String],
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
.theme-light {
  .icon__step {
    filter: invert(28%) sepia(68%) saturate(2187%) hue-rotate(231deg)
      brightness(94%) contrast(97%);
  }
}
.theme-dusk {
  .icon__step {
    filter: invert(66%) sepia(36%) saturate(4547%) hue-rotate(199deg)
      brightness(104%) contrast(92%);
  }
}
</style>

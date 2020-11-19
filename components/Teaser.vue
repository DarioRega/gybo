<template>
  <div
    v-editable="blok"
    class="max-w-6xl mr-auto"
    :class="!isNested && 'container top-spacer mb-8'"
  >
    <p
      v-if="blok.caption"
      :data-aos="shouldAnimate && 'fade-up'"
      data-aos-easing="ease-out"
      data-aos-duration="300"
      :data-aos-offset="offset"
      class="text-tertiary mb-4 caption-lg font-semibold tracking-wide uppercase"
    >
      {{ blok.caption }}
    </p>
    <h2
      :data-aos="shouldAnimate && 'fade-up'"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay="200"
      :data-aos-offset="offset"
      class="font-extrabold tracking-tight text-primary"
      :class="hasContent() ? 'mb-4' : 'title-spacer'"
    >
      {{ blok.headline }}
    </h2>
    <div v-if="typeof blok.description === 'object'">
      <div
        v-if="hasContent()"
        :data-aos="shouldAnimate && 'fade-up'"
        data-aos-easing="ease-out"
        data-aos-duration="400"
        :data-aos-offset="offset"
        data-aos-delay="300"
        class="text-secondary mb-12 rich-text"
        v-html="content_description"
      ></div>
    </div>
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
    offset: {
      type: String,
      default: null,
    },
    shouldAnimate: {
      type: Boolean,
      default: true,
    },
    isNested: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    content_description() {
      return this.$storyapi.richTextResolver.render(this.blok.description)
    },
  },
  methods: {
    hasContent() {
      const description = this.blok.description
      if (description.content) {
        if (description.content[0]) {
          if (description.content[0].text) {
            return true
          } else if (description.content[0].content) {
            if (description.content[0].content[0]) {
              if (description.content[0].content[0].text) return true
            }
          }
        }
      }
      return false
    },
  },
}
</script>

<template>
  <section class="section-spacer bg-secondary w-full overflow-hidden">
    <div class="container">
      <div class="max-w-max-content lg:max-w-7xl mx-auto">
        <div class="relative z-10">
          <div class="lg:max-w-none">
            <teaser
              v-for="item in blok.teaser"
              :key="item._uid"
              :blok="item"
              :is-nested="true"
            />
          </div>
        </div>
        <div class="relative">
          <div class="relative">
            <div class="lg:grid lg:grid-cols-2 lg:gap-32 mb-8">
              <div class="mb-12 lg:max-w-none lg:mb-0">
                <div
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  class="rich-text text-secondary"
                  v-html="richtext_col1"
                ></div>
                <button-primary
                  v-if="buttonCta"
                  class="mt-12"
                  :to="buttonCta.path"
                  :alt="buttonCta.alt"
                  >{{ buttonCta.name }}</button-primary
                >
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-easing="ease-out"
                data-aos-duration="800"
                data-aos-delay="500"
                class="text-secondary rich-text"
                v-html="richtext_col2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentTwoColumns',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    richtext_col1() {
      return this.$storyapi.richTextResolver.render(this.blok.col_1)
    },
    richtext_col2() {
      return this.$storyapi.richTextResolver.render(this.blok.col_2)
    },
    buttonCta() {
      return this.blok.buttonCta[0]
    },
  },
}
</script>

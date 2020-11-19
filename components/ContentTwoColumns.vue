<template>
  <section
    class="section-spacer content-two-columns bg-secondary w-full overflow-hidden"
  >
    <div class="container">
      <div class="max-w-max-content lg:max-w-7xl mx-auto">
        <div class="relative z-10">
          <div
            class="lg:max-w-none"
            data-aos-duration="800"
            data-aos-delay="500"
          >
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
                  data-aos="fade-up"
                  data-aos-easing="ease-out"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  class="lg:hidden rich-text text-secondary"
                  v-html="richtext_col1"
                ></div>
                <div
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out"
                  data-aos-duration="500"
                  data-aos-delay="200"
                  data-aos-anchor=".hero"
                  data-aos-anchor-placement="top-center"
                  class="hidden lg:block rich-text text-secondary"
                  v-html="richtext_col1"
                ></div>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-out"
                  data-aos-duration="300"
                  data-aos-delay="300"
                >
                  <button-primary
                    v-if="buttonCta"
                    class="mt-12"
                    :to="buttonCta.path"
                    :alt="buttonCta.alt"
                    >{{ buttonCta.name }}</button-primary
                  >
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="500"
                data-aos-delay="500"
                class="lg:hidden text-secondary rich-text"
                v-html="richtext_col2"
              ></div>
              <div
                data-aos="fade-up-left"
                data-aos-easing="ease-out"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-anchor=".hero"
                data-aos-anchor-placement="top-center"
                class="hidden lg:block text-secondary rich-text"
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

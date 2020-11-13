<template>
  <section class="py-16 xl:py-36 bg-secondary w-full overflow-hidden">
    <div class="container">
      <div class="max-w-max-content lg:max-w-7xl mx-auto">
        <div class="relative z-10 mb-8 md:mb-2 md:px-6">
          <div class="lg:max-w-none">
            <p
              class="text-tertiary caption-lg font-semibold tracking-wide uppercase"
            >
              Transactions
            </p>
            <h2 class="mt-2 font-extrabold tracking-tight text-primary">
              A better way to send money
            </h2>
          </div>
        </div>
        <div class="relative">
          <div class="relative md:p-6">
            <div class="lg:grid lg:grid-cols-2 lg:gap-32 mb-8">
              <div class="mb-10 lg:max-w-none lg:mb-0">
                <div
                  class="rich-text text-secondary"
                  v-html="richtext_col1"
                ></div>
                <button-primary
                  v-if="buttonCta"
                  class="mt-8"
                  :to="buttonCta.path"
                  :alt="buttonCta.alt"
                  >{{ buttonCta.name }}</button-primary
                >
              </div>
              <h3 class="md:hidden pt-2 pb-1 font-semibold">Here to help</h3>
              <div
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
  mounted() {
    console.log('COINTENTWO COLUMN BLOK', this.blok)
  },
}
</script>

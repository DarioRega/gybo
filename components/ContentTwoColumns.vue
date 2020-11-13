<template>
  <section class="py-16 xl:py-36 bg-secondary w-full overflow-hidden">
    <div class="container">
      <div class="max-w-max-content lg:max-w-7xl mx-auto">
        <div class="relative z-10 mb-8 md:mb-2 md:px-6">
          <div class="lg:max-w-none">
            <p class="text-tertiary font-semibold tracking-wide uppercase">
              Transactions
            </p>
            <h1 class="mt-2 font-extrabold tracking-tight text-primary">
              A better way to send money
            </h1>
          </div>
        </div>
        <div class="relative lg:mt-10 xl:mt-2 rich-text">
          <div class="relative md:p-6">
            <div class="lg:grid lg:grid-cols-2 lg:gap-32 mb-8">
              <div class="text-secondary mb-6 lg:max-w-none lg:mb-0">
                <div v-html="richtext_col1"></div>
              </div>
              <h3 class="md:hidden pt-2 pb-1 font-semibold">Here to help</h3>
              <div class="text-secondary" v-html="richtext_col2"></div>
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
  },
  mounted() {
    console.log('COINTENTWO COLUMN BLOK', this.blok)
  },
}
</script>

<style lang="scss">
.rich-text {
  p {
    margin-bottom: 1rem;
    @screen md {
      margin-bottom: 2rem;
    }
  }
  ul {
    li {
      @apply relative list-none pl-10;

      &::before {
        @apply text-tertiary text-body-sm;
        font-family: FontAwesome;
        position: absolute;
        left: 0;
        content: '\f10c';
      }
      p {
        margin-bottom: 0.5em;
      }
    }
  }
}
</style>

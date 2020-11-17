<template>
  <section class="relative bg-secondary section-spacer">
    <div class="container">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-secondary"></div>
      </div>
      <div class="relative lg:max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="bg-secondary lg:col-span-2">
          <div class="lg:max-w-xl lg:mr-auto">
            <teaser
              v-for="item in blok.teaser"
              :key="item._uid"
              :blok="item"
              :is-nested="true"
            />
            <contact-card class="hidden lg:flex" :contact="blok.contactGybo" />
          </div>
        </div>
        <div
          class="md:flex md:justify-between items-center w-full lg:col-span-3"
        >
          <contact-form
            v-for="item in blok.form"
            :key="item._uid"
            :blok="item"
            class="flex-1"
          />
          <contact-card
            class="md:flex lg:hidden md:max-w-sm w-full"
            :contact="blok.contactGybo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('THIS BLOK CONTACT SECTIon', this.blok)
  },
}
</script>

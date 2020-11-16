<template>
  <div class="relative bg-secondary section-spacer">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-secondary"></div>
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-secondary px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <teaser
            v-for="item in blok.teaser"
            :key="item._uid"
            :blok="item"
            :is-nested="true"
          />
        </div>
      </div>
      <contact-form v-for="item in blok.form" :key="item._uid" :blok="item" />
    </div>
  </div>
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

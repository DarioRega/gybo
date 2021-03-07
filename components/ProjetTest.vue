<template>
  <section class="section-spacer project-test bg-secondary">
    <div class="container">
      <div class="w-full block lg:flex justify-between items-center">
        <div class="lg:mr-auto lg:w-7/12 xxl:mr-0 xxl:w-full">
          <teaser
            v-for="item in blok.teaser"
            :key="item._uid"
            :blok="item"
            :is-nested="true"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="400"
          data-aos-delay="200"
          data-aos-anchor=".project-test"
          data-aos-offset="-300"
          data-aos-anchor-placement="top-center"
          class="lg:hidden pb-6"
        >
          <button-primary
            v-if="buttonCta"
            class="mt-12"
            :to="buttonCta.path"
            :alt="buttonCta.alt"
            >{{ buttonCta.name }}</button-primary
          >
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="400"
          data-aos-delay="300"
          class="hidden lg:block"
        >
          <button-primary class="lg:ml-16 xxl:ml-0">{{
            buttonCta.name
          }}</button-primary>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjetTest',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    buttonCta() {
      return this.blok.buttonCta[0]
    },
  },
}
</script>

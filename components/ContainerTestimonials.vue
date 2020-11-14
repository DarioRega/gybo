<template>
  <section class="bg-primary">
    <div class="container">
      <div
        v-if="blok"
        class="flex items-end"
        :class="
          blok.testimonial.length === 1 ? 'justify-center' : 'justify-between'
        "
      >
        <div v-for="item in blok.testimonial" :key="item._uid">
          <testimonial :blok="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContainerTestimonials',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('CONTAINER TESTIM', this.blok)
  },
}
</script>

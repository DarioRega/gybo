<template>
  <section class="section-spacer bg-secondary">
    <div class="container">
      <div class="w-full block lg:flex justify-between items-center">
        <teaser
          v-for="item in blok.teaser"
          :key="item._uid"
          :blok="item"
          :is-nested="true"
          :should-animate="false"
        />
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="400"
          data-aos-delay="400"
        >
          <button-primary>Réservez votre consultation gratuite</button-primary>
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
}
</script>

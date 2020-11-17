<template>
  <div class="bg-secondary w-full section-spacer overflow-hidden">
    <div class="relative container">
      <div class="relative lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
        <div class="xl:col-span-1 xl:pr-8 xl:block">
          <teaser
            v-for="item in blok.teaser"
            :key="item._uid"
            :blok="item"
            :is-nested="true"
          />
        </div>
        <div
          class="sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16 lg:gap-y-32 lg:gap-x-20 lg:col-span-2"
        >
          <choose-us-arg
            v-for="(item, index) in blok.item_why_us"
            :key="item._uid"
            :blok="item"
            :class="index < blok.item_why_us.length - 1 && 'mb-16 sm:mb-0'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerWhyChooseUs',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('BLOK WHY CHOOSE CONTAINER', this.blok)
  },
}
</script>

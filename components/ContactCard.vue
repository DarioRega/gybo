<template>
  <div
    class="rounded-md border-primary bg-primary w-full h-32 md:h-40 lg:h-32 xl:h-48 shadow-md flex-col mt-16 md:-mt-20 lg:mt-16"
  >
    <div
      class="card-content h-full w-full rounded-b-md border-tertiary flex items-center justify-center"
    >
      <a
        class="text-primary font-semibold hover:underline"
        :href="'mailto:' + contact"
        >{{ contact }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: String,
      default: 'contact@gybo.ch',
    },
  },
}
</script>

<style scoped lang="scss">
.card-content {
  border-bottom-width: 6px;
  border-style: solid;
}
</style>

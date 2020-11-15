<template>
  <section class="bg-primary section-spacer">
    <div class="container">
      <div class="lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-32">
        <process-step
          v-for="(item, index) in 6"
          :key="index"
          :class="
            index % 2 === 0
              ? 'pr-12 xl:pr-24 border-r-4 border-tertiary'
              : 'pl-12 xl:pl-24'
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContainerProcessStep',
}
</script>

<style scoped></style>

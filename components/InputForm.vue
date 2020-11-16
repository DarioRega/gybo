<template>
  <div>
    <label :for="blok.id" class="sr-only">{{ blok.label }}</label>
    <div class="relative rounded-md shadow-sm">
      <textarea
        v-if="blok.type === 'textarea'"
        :id="blok.id"
        v-model="value"
        :name="blok.id"
        rows="5"
        class="form-input form-outline block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
        :placeholder="blok.placeholder"
      ></textarea>
      <input
        v-else
        :id="blok.id"
        v-model="value"
        :name="blok.id"
        class="form-input form-outline block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
        :placeholder="blok.placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      value: '',
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.$emit('valueChange', this.blok.id, newValue)
    },
  },
}
</script>

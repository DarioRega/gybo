<template>
  <div>
    <label :for="blok.id" class="sr-only">{{ blok.label }}</label>
    <span
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="800"
      data-aos-delay="1600"
      data-aos-anchor=".contact-form"
      data-aos-anchor-placement="top-bottom"
      class="caption-sm block pb-2 text-right text-secondary"
      >{{ blok.fieldRequirement }}</span
    >
    <div class="relative rounded-md shadow-sm">
      <div
        v-if="blok.type === 'textarea'"
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="500"
        data-aos-anchor=".contact-form"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="index * 300 + 100"
      >
        <textarea
          :id="blok.id"
          v-model="value"
          :name="blok.id"
          rows="5"
          :class="error && 'has-error'"
          class="form-input form-outline block w-full py-3 px-4 transition ease-in-out duration-150"
          :placeholder="blok.placeholder"
        ></textarea>
      </div>
      <div
        v-else
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="500"
        data-aos-anchor=".contact-form"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="index * 300 + 100"
      >
        <input
          :id="blok.id"
          v-model.lazy="value"
          :name="blok.id"
          class="form-input form-outline block w-full py-3 px-4 transition ease-in-out duration-150"
          :class="error && 'has-error'"
          :placeholder="blok.placeholder"
        />
      </div>
      <div
        v-if="error"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg
          class="w-8 h-8 text-brand-error"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p v-if="error" id="email-error" class="mt-3 caption-lg text-red-600">
      {{ error }}
    </p>
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
    error: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
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

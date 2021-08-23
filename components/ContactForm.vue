<template>
  <div class="bg-secondary">
    <notification
      :is-visible="shouldShowNotification"
      :message="notification.message"
      :type="notification.type"
      @click="shouldShowNotification = false"
    />
    <div
      class="max-w-xl w-full lg:max-w-2xl xl:max-w-5xl xxl:max-w-6xl md:ml-0 lg:ml-auto lg:mr-0 mx-auto"
    >
      <form
        :key="formKey"
        class="grid grid-cols-1 gap-y-6 md:gap-y-6"
        @submit.prevent="handleSubmit"
      >
        <input-form
          v-for="(field, index) in blok.fields"
          :key="field._uid"
          :blok="field"
          :error="hasError(field.id)"
          :index="index"
          @valueChange="valueChange"
        />
        <div class="mt-4">
          <span
            class="inline-flex rounded-md shadow-sm lg:hidden"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="1300"
            data-aos-offset="-500"
          >
            <button-primary type="submit">
              {{ blok.submitButton }}
            </button-primary>
          </span>
          <span
            class="inline-flex rounded-md shadow-sm hidden lg:block"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="1300"
            data-aos-offset="-500"
          >
            <button-primary type="submit">
              {{ isLoading ? 'Envoi en cours...' : blok.submitButton }}
            </button-primary>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formKey: 1,
      formValues: {},
      errors: {},
      optionalFields: [''],
      isLoading: false,
      shouldShowNotification: false,
      notification: {
        type: '',
        message: '',
      },
    }
  },
  watch: {
    shouldShowNotification(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          if (this.shouldShowNotification) {
            this.shouldShowNotification = false
          }
        }, 5000)
      }
    },
  },
  mounted() {
    this.blok.fields.forEach((field) => {
      if (field) {
        this.formValues[field.id] = ''
        if (field.isOptional) {
          this.optionalFields.push(field.id)
        }
      }
    })
  },
  methods: {
    valueChange(propertyName, value) {
      this.formValues[propertyName] = value
    },
    handleSubmit() {
      if (!this.validateFormValues()) {
        return
      }
      this.isLoading = true
      this.$axios
        .post('/api/contact', this.formValues)
        .then((res) => this.handleSuccess())
        .catch(() =>
          this.handleError(
            'Un problème est survenu, veuillez nous contacter directement via notre email en bas de page. Merci'
          )
        )
        .finally(() => (this.isLoading = false))
    },
    handleSuccess() {
      this.formValues = {}
      this.formKey = Math.floor(Math.random() * Math.floor(9999))
      this.shouldShowNotification = true
      this.notification = {
        type: 'success',
        message:
          'Merci pour votre envoi, nous reviendrons vers vous dès que possible.',
      }
    },
    handleError(errMessage) {
      this.shouldShowNotification = true
      this.notification = {
        type: 'error',
        message: errMessage,
      }
    },
    hasError(fieldId) {
      const error = this.errors[fieldId]
      if (error) return error
      return ''
    },
    validateFormValues() {
      this.errors = {}
      const values = this.formValues
      let errors = {}

      Object.keys(values).forEach((propertyName) => {
        const error = this.$validateValue(
          propertyName,
          values[propertyName],
          this.optionalFields.includes(propertyName)
        )
        if (error) {
          errors = { ...errors, [propertyName]: error }
        }
      })
      if (Object.keys(errors).length > 0 && errors.constructor === Object) {
        this.errors = errors
        return false
      }
      return true
    },
  },
}
</script>

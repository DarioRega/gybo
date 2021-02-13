export default (context, inject) => {
  /* eslint-disable */
  //prettier-ignore
  const validators = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumber:/^([0][1-9][0-9](\s|)[0-9][0-9][0-9](\s|)[0-9][0-9](\s|)[0-9][0-9])$|^(([0][0]|\+)[1-9][0-9](\s|)[0-9][0-9](\s|)[0-9][0-9][0-9](\s|)[0-9][0-9](\s|)[0-9][0-9])$/,
  }
  //TODO GET i18n current locale and adapt error handling
  const formErrors = {
    fr: {
      empty: 'Ce champs est requis',
      email: 'Veuillez saisir un email valide',
    },
    en: {},
  }
  /* eslint-enable */
  const validate = (property, value, isOptional) => {
    if (!isOptional) {
      if (!value) {
        return formErrors.fr.empty
      }

      if (validators[property]) {
        if (!validators[property].test(value)) {
          return formErrors.fr[property]
        }
      }
    }
  }
  inject('validateValue', (property, value, isOptional = false) =>
    validate(property, value, isOptional)
  )
}

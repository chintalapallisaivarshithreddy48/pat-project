import validator from 'validator'

export const validateRequiredString = (value, field) => {
  if (!value || validator.isEmpty(value.toString())) {
    throw new Error(`${field} is required`)
  }
}

export const validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email format')
  }
}

import * as yup from "yup"

const FormDetails = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  streetAddr: yup.string().required(),
  city: yup.string().required(),
  zip: yup.number().positive().integer().min(10000).max(99999).required(),
  cardNumber: yup.number().positive().integer().min(1000000000000000).max(9999999999999999).required(),
  expDate: yup.string().matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/).required(),
  cvv: yup.number().positive().integer().min(100).max(9999).required()
})

export default FormDetails
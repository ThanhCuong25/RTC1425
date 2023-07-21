import * as yup from "yup";

const ValidateContact = yup.object().shape({
    name: yup.string().required("Name không được để trống"),
    email: yup.string().required(),
    phone: yup.string().required()
})
export default ValidateContact
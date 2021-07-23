import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(3, 'Password must be 3 characters long'),
    terms: yup
        .boolean()
        .required('Must accept terms of service')
        .oneOf([true], 'Civil Must accept terms of service'),
})

export default formSchema
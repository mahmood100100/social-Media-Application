import * as yup from "yup";

export const registrationSchema = yup.object({
    name: yup.string()
        .required("name is required")
        .min(6, "must be at least 6 characters")
        .max(15, "must not exceed 15 characters"),
    email: yup.string()
    .email()
    .required("email is required"),
    username: yup.string()
        .required("username is required")
        .min(3, "must be at least 3 characters")
        .max(10, "must not exceed 10 characters"),
    password: yup.string()
        .required("password is required")
        .min(8, "must be at least 8 characters"),
    confirmpass: yup.string()
        .oneOf([yup.ref('password'), null as any], 'Passwords must match')
        .required('Confirm password is required'),
    image: yup.mixed().test('fileType', 'Invalid file format, only image files are allowed', function (this, value) {
        if (!value) return true;
        if (value instanceof File) 
            return value.type.startsWith('image/');
    }).notRequired()
});

export const logInSchema = yup.object({
    username: yup.string()
        .required("username is required")
        .min(3, "must be at least 3 characters")
        .max(10, "must not exceed 10 characters"),
    password: yup.string()
        .required("password is required")
        .min(8, "must be at least 8 characters"),
});

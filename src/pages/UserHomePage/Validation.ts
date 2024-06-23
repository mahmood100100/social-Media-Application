import * as yup from "yup";

export const sharePostSchema = yup.object({
    title: yup.string().notRequired(),
    body: yup.string().required("body is required"),
    image: yup.mixed().test('fileType', 'Invalid file format, only image files are allowed', function (this, value) {
        if (!value) return true;
        if (value instanceof File) 
            return value.type.startsWith('image/');
    }).notRequired()
});

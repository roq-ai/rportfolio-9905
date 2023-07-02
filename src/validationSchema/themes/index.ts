import * as yup from 'yup';

export const themeValidationSchema = yup.object().shape({
  theme_name: yup.string().required(),
  user_id: yup.string().nullable(),
});

import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  availability_status: yup.boolean().required(),
  outlet_id: yup.string().nullable().required(),
});

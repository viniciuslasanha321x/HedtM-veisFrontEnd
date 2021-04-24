import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  newpassword: Yup.string()
    .min(6, 'No minimo 6 digitos')
    .required('Nova senha invalida'),
  confirmnewpassword: Yup.string().oneOf(
    [Yup.ref('newpassword')],
    'Senha não corresponde',
  ),
});

export default resetPasswordSchema;

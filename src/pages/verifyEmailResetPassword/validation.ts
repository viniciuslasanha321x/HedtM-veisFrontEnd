import * as Yup from 'yup';

const verifyEmailResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .strict()
    .lowercase('Email deve conter apenas letras minúsculas.')
    .email(
      'Endereço de e-mail inválido. Digite um e-mail válido neste formato: seunome@exemplo.com.',
    )
    .required('Email obrigatório.'),
});

export default verifyEmailResetPasswordSchema;

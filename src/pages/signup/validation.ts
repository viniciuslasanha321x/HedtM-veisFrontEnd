import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(3, 'No minimo 3 letras').required('nome obrigatório'),
  email: Yup.string()
    .strict()
    .lowercase('Email deve conter apenas letras minúsculas.')
    .email(
      'Endereço de e-mail inválido. Digite um e-mail válido neste formato: seunome@exemplo.com.',
    )
    .required('Email obrigatório.'),
  password: Yup.string()
    .min(6, 'No minimo 6 digitos')
    .required('Senha obrigatória'),
});

export default signUpSchema;

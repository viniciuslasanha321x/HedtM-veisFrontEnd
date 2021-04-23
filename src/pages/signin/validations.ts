import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório.')
    .strict()
    .lowercase('Email deve conter apenas letras minúsculas.')
    .email('Email Invalido'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(6, 'No minimo 6 digitos'),
});

export default signInSchema;

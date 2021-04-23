import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string()
    .min(8, 'A senha tem que ter no minimo 8 dígitos')
    .required('Senha obrigatória'),
});

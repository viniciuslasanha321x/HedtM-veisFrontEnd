import { Field } from 'formik';
import React, {
  HTMLAttributes,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

// Assets
import IconEyeClose from '../../../public/assets/IconEyeClose.svg';
import IconEyeOpen from '../../../public/assets/IconEyeOpen.svg';

// Stylized components
import { colors, Container, Error } from './styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  iconEye?: boolean;
  type?: string;
  name: string;
  color?: colors;
  error: string | undefined;
  touched: boolean | undefined;
  value: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Input = ({
  iconEye = false,
  color,
  name,
  type = 'text',
  error,
  touched,
  value,
  ...rest
}: PropsWithChildren<InputProps>) => {
  const [inputType, setInputType] = useState('password');
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsError(!!error && !!touched);
  }, [error, touched]);

  const handleOnBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <>
      <Container
        color={color}
        isError={isError}
        isFocus={isFocus}
        isFilled={isFilled}
        onFocus={() => setIsFocus(true)}
        onBlur={handleOnBlur}
      >
        <Field type={iconEye ? inputType : type} name={name} {...rest} />

        {iconEye && (
          <button
            type="button"
            onClick={() =>
              setInputType(inputType === 'password' ? 'text' : 'password')
            }
          >
            <img
              src={inputType === 'password' ? IconEyeClose : IconEyeOpen}
              alt="Show/Hide password"
            />
          </button>
        )}
      </Container>

      {error && touched ? <Error>{error}</Error> : null}
    </>
  );
};

export default memo(Input);

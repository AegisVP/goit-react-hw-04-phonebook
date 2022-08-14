import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

const Button = styled.button`
  display: block;
  padding: ${p => p.theme.mp(2, 1)};
  margin: ${p => p.theme.mp(3, 'auto', 2)};
  font-weight: bold;
  cursor: pointer;

  border: none;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Label = styled.label`
  background-color: rgba(125, 255, 125, 0.1);
  padding: ${p => p.theme.mp(1)};
  font-weight: bold;
  border: none;
`;

export const InputField = styled(Field)`
  padding: ${p => p.theme.mp(1)};
  border: none;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  outline: none;
`;

export const ErrorText = styled(ErrorMessage)`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: rgb(255, 170, 170);
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  width: 80%;
  background-color: ${p => p.theme.colors.buttonColor};
`;

export const ResetButton = styled(Button)`
  font-size: 18px;
  width: 40px;
  padding: ${p => p.theme.mp(1)};
  background-color: ${p => p.theme.colors.errButtonColor};
`;

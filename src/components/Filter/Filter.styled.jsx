import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  background-color: rgba(125, 255, 125, 0.1);
  padding: ${p => p.theme.mp(1)};
  font-weight: bold;
  border: none;
`;

export const InputField = styled.input`
  padding: ${p => p.theme.mp(1)};
  border: none;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  outline: none;
`;

export const Button = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;

    border:none;
    outline:none;
    background-color: transparent;
`;
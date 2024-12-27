import styled from 'styled-components';

const Input = styled.input `

order: 1px solid #1d388a;
  background-color: transparent;
  border: 1px solid #1d388a;
  padding: 5px 20px;
  border-radius: 10px;
  width: 400px;
  color: #1d388a;
  font-size: 14px;
  margin-bottom: 5px;
 
  &::placeholder{
    color: #1d388a;
    font-size: 14px;
  }

`

export default Input;
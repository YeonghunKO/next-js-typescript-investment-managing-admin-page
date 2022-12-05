import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

export const ErrorMessage = styled.p`
  margin-top: -20px;
  font-weight: 900;
  color: red;
`;

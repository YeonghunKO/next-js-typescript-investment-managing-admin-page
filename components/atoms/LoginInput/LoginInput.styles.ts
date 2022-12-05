import { backgroundColor } from 'utils/colorStyles';
import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  font-size: 18px;
  width: 100%;
  background-color: ${props => backgroundColor(props)};
`;

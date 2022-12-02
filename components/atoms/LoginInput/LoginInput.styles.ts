import { backgroundColor } from '@shared/styles/colorStyles';
import styled from 'styled-components';

const ComponenetWrapper = styled.input`
  padding: 1rem;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${props => backgroundColor(props)};
`;

export default ComponenetWrapper;

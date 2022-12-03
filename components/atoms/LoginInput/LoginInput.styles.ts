import { backgroundColor } from '@shared/styles/colorStyles';
import styled from 'styled-components';

const ComponenetWrapper = styled.input`
  padding: 1rem;
  font-size: 18px;
  width: 100%;
  background-color: ${props => backgroundColor(props)};
`;

export default ComponenetWrapper;

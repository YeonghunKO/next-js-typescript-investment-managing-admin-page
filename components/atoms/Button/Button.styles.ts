import { backgroundColor, textColour } from '@shared/styles/colorStyles';
import styled from 'styled-components';

const ComponentWrapper = styled.button`
  background-color: ${props => backgroundColor(props)};
  color: ${props => textColour(props)};
  width: ${({ width }: any) => width};
  padding: 1rem;
`;

export default ComponentWrapper;

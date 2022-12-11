import { backgroundColor, textColour } from 'utils/colorStyles';
import styled from 'styled-components';

export const Container = styled.aside<{ isVisible: boolean }>`
  ${({ theme }) => theme.flexColumn}
  width:${({ isVisible }) => (isVisible ? '20vw' : '0')};
  background-color: ${props => backgroundColor(props)};
  color: ${props => textColour(props)};
  transition: width 0.3s ease;
`;

export const Header = styled.span`
  font-size: 1.5rem;
  padding: 1rem;
  letter-spacing: 5px;
  font-weight: bold;
`;

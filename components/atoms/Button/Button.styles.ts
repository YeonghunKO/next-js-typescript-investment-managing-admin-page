import { backgroundColor, textColour } from 'utils/colorStyles';
import styled from 'styled-components';

export const Button = styled.button<{ padding?: string; width?: string }>`
  background-color: ${props => {
    if (props.disabled) {
      return props.theme.grey100;
    }
    return backgroundColor(props);
  }};
  color: ${props => textColour(props)};
  width: ${({ width = '100%' }: { width?: string }) => width && width};
  padding: ${({ padding = '1rem' }) => padding && padding};
  transition: 0.1s all ease-in;

  &:hover {
    opacity: 0.8;
  }
`;

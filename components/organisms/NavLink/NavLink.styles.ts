import { backgroundColor } from 'utils/colorStyles';
import styled from 'styled-components';

export const Anchor = styled.a`
  ${({ theme }) => theme.flexCenter}
  padding: 1rem;
  transition: 0.1s all ease-in;
  width: 20vw;
  &:hover {
    opacity: 0.8;
  }

  &.is-active {
    background-color: ${props => {
      const variantProps = {
        ...props,
        backgroundColor: props.theme.primary300,
      };
      return backgroundColor(variantProps);
    }};
    padding-left: 2rem;
  }
`;

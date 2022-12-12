import styled from 'styled-components';

export const Anchor = styled.a<{
  backgroundColor: string | undefined;
  isSiderVisible: boolean;
}>`
  ${({ theme }) => theme.flexCenter}
  justify-content: start;
  background-color: ${({ theme }) => theme.primary800};
  padding: ${({ isSiderVisible }) => (isSiderVisible ? '1rem' : '0')};
  transition: 0.1s all ease-in;
  width: auto;
  &:hover {
    opacity: 0.8;
  }

  &.is-active {
    background-color: ${({ theme }) => theme.primary600};
    padding-left: ${({ isSiderVisible }) => (isSiderVisible ? '2rem' : '0')};
  }

  .anchor__wrapper {
    ${({ theme }) => theme.flexCenter}
  }
`;

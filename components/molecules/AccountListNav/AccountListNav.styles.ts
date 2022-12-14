import styled from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => theme.flexCenter};
  justify-content: flex-start;
  gap: 1rem;
`;

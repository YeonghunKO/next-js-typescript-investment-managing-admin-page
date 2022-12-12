import styled from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => theme.flexCenter}
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.flexCenter};
  gap: 0.5rem;
`;

export const IconsNav = styled.nav`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-around;
`;

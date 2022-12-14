import styled from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => theme.flexCenter}
  justify-content: space-between;
  height: 10%;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.flexCenter};
  gap: 0.5rem;
`;

export const IconsNav = styled.nav`
  ${({ theme }) => theme.flexCenter};
  justify-content: space-around;
  gap: 0.3rem;
`;

import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.section`
  ${({ theme }) => theme.flexColumn};
  width: 100%;
`;

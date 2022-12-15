import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.grey50};
  padding: 0.6rem;
  height: 90%;
  width: 100%;
`;

export const Content = styled.section`
  ${({ theme }) => theme.flexColumn};
  align-items: center;
  height: 90%;
  width: 100%;
`;

export const TableContainer = styled.div`
  ${({ theme }) => theme.flexCenter};
  margin-top: 0.5rem;
  width: 100%;
  height: 89%;
`;

export const EmptyTable = styled.div`
  ${({ theme }) => theme.flexCenter};
  overflow-y: hidden;
`;

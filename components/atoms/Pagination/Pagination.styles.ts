import { backgroundColor, textColour } from 'utils/colorStyles';
import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  margin: 0.5rem 0;
  justify-content: space-between;
  height: 10%;
  width: 37%;
`;

export const PaginationContainer = styled.ul`
  ${({ theme }) => theme.flexCenter};
  gap: 0.8rem;
`;

export const PaginationPages = styled.li<{ isActive?: boolean }>`
  font-weight: 600;
  color: ${({ isActive, theme }) => (isActive ? theme.secondary : 'black')};
  :hover {
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
`;

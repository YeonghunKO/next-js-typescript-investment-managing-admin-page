import styled from 'styled-components';

const ComponentWrapper = styled.form`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

export default ComponentWrapper;

import styled from 'styled-components';

export const ComponentWrapper = styled.main`
  ${({ theme }) => theme.flexCenter};
  height: 100vh;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexColumn};
  ${({ theme }) => theme.flexCenter};
  width: 50%;
  height: 90%;
  border: 1px solid lightgrey;
  border-radius: 7px;
  box-shadow: 2px 2px 7px rgb(200, 200, 200);
  /* height: auto; */

  img {
    width: 50%;
    height: 30%;
  }

  form {
    width: 80%;
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

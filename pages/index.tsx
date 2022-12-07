import Login from '@components/templates/Login';
import type { NextPage } from 'next';
import { LOGIN_DATA } from 'data/login';

const Home: NextPage = () => {
  return (
    <>
      <Login data={LOGIN_DATA} />
    </>
  );
};

export default Home;

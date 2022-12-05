import ErrorModal from '@components/organisms/ErrorModal';
import Login from '@components/templates/Login';
import { COLOR_VARIANTS } from '@constants/arguments';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default Home;

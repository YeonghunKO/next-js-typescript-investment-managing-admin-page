import LoginInput from '@components/atoms/LoginInput';
import { INPUT_VARIANTS } from '@constants/arguments';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <LoginInput
        variant={INPUT_VARIANTS.PRIMARY100}
        placeholder="이메일입력해라"
      />
    </div>
  );
};

export default Home;

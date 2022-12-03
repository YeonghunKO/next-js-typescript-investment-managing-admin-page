import Button from '@components/atoms/Button';
import LoginInput from '@components/atoms/LoginInput';
import { COLOR_VARIANTS } from '@constants/arguments';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      {/* <Button width="100%" variant={COLOR_VARIANTS.SECONDARY}>
        버튼
      </Button> */}
      <LoginInput
        placeholder="안녕"
        type="text"
        variant={COLOR_VARIANTS.PRIMARY100}
      />
    </div>
  );
};

export default Home;

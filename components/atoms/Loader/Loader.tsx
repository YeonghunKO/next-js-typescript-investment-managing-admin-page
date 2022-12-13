import * as S from './Loader.styles';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <S.Container>
      <HashLoader size={60} speedMultiplier={1.5} />
    </S.Container>
  );
};

export default Loader;

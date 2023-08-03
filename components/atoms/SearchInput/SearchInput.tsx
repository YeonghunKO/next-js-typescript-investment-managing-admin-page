import { useDebounce } from "@hooks/common/useDebounce";
import type { SearchInputType } from "@type/atoms/SearchInput";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { accountDataState } from "@store/accountDataAtoms";
import * as S from "./SearchInput.styles";

const SearchInput = ({
  updateQueryParamsOnInputChange,
  queryParams: { q },
}: SearchInputType) => {
  const [value, setValue] = useState(q);

  const {
    accountListBoard: { searchInput: data },
  } = useRecoilValue(accountDataState);

  useDebounce(() => {
    updateQueryParamsOnInputChange(value);
  }, value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  useEffect(() => {
    setValue(q);
  }, [q]);
  return (
    <S.Input
      type={data.type}
      value={value}
      placeholder={data.placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchInput;

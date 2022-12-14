import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import type { DropDownType } from '@type/atoms/DropDown';
import React, { useEffect, useState } from 'react';
import * as S from './DropDown.styles';

const inputLabel = {
  broker_id: '브로커명',
  is_active: '계좌활성화',
  status: '계좌상태',
};

const DropDown = ({
  data,
  label,
  updateQueryParamsOnDropDownChange,
  queryParams: { broker_id, is_active, status },
}: DropDownType) => {
  const [selectVal, setSelectVal] = useState('');

  const handleChange = (e: SelectChangeEvent<any>) => {
    const { name, value } = e.target;
    updateQueryParamsOnDropDownChange(name, value);
  };

  useEffect(() => {
    switch (label) {
      case 'broker_id':
        setSelectVal(broker_id || '');
        break;
      case 'is_active':
        setSelectVal(is_active || '');
        break;
      case 'status':
        setSelectVal(status || '');
        break;

      default:
        console.log('invalid drop name');
        break;
    }
  }, [broker_id, is_active, status, label]);

  return (
    <FormControl sx={S.DropDownStyle.form}>
      <InputLabel>{inputLabel[label]}</InputLabel>
      <Select
        name={label}
        label={inputLabel[label]}
        onChange={handleChange}
        value={selectVal}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={S.DropDownStyle.select}
      >
        {data.map(({ label, value }, idx) => (
          <MenuItem key={idx} value={value} sx={S.DropDownStyle.menuItem}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;

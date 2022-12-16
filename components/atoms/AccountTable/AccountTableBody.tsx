import {
  ACCOUNT_NUMBER_FORMAT,
  BROKERS_FORMAT,
  STATUS_FORMAT,
} from '@constants/formatDataString';
import CheckBox from '@mui/material/Checkbox';
import { TableBody, TableCell, TableRow } from '@mui/material';
import type {
  AccountTableBodyType,
  AccountTableBodyDataType,
} from '@type/atoms/AccountTable';
import React from 'react';
import {
  assetsColorDecider,
  formattingAccountNumber,
} from 'utils/processFormatData';

const tabelStyle = {
  align: 'center',
  sx: { fontSize: '0.8rem', padding: '0.5rem' },
} as const;

const AccountTableBody = ({
  accountTableBodyData,
  isCheckbox,
}: AccountTableBodyType) => {
  return (
    <TableBody sx={{ fontSize: '.5rem !important' }}>
      {accountTableBodyData?.map(
        (
          {
            userName,
            number,
            broker_id,
            status,
            accountName,
            assets,
            payments,
            is_active,
            created_at,
          }: AccountTableBodyDataType,
          idx: number
        ) => (
          <TableRow key={idx}>
            {isCheckbox ? (
              <TableCell
                key="checkboxHead"
                align="center"
                size="small"
                sx={{ padding: '0.8rem' }}
              >
                <CheckBox size="small" sx={{ padding: 0 }} />
              </TableCell>
            ) : null}
            {userName ? (
              <TableCell
                component="th"
                align="center"
                scope="row"
                sx={{
                  color: '#357ae1',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                }}
              >
                {userName}
              </TableCell>
            ) : (
              <TableCell
                component="th"
                align="center"
                scope="row"
                sx={{
                  color: '#357ae1',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                }}
              >
                무명인
              </TableCell>
            )}
            <TableCell {...tabelStyle}>{BROKERS_FORMAT[broker_id]}</TableCell>
            <TableCell {...tabelStyle}>
              {formattingAccountNumber(
                number,
                ACCOUNT_NUMBER_FORMAT[broker_id]
              )}
            </TableCell>
            <TableCell {...tabelStyle}>{STATUS_FORMAT[status]}</TableCell>
            <TableCell {...tabelStyle}>{accountName}</TableCell>
            <TableCell
              {...tabelStyle}
              style={{ color: assetsColorDecider(assets, payments) }}
            >
              {parseInt(assets).toLocaleString()}
            </TableCell>
            <TableCell {...tabelStyle}>
              {parseInt(payments).toLocaleString()}
            </TableCell>
            <TableCell {...tabelStyle}>
              {is_active ? '활성화' : '비활성화'}
            </TableCell>
            <TableCell {...tabelStyle}>
              {created_at.split('').slice(0, 10)}
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  );
};

export default AccountTableBody;

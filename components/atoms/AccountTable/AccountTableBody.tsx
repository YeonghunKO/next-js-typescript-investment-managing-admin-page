import {
  ACCOUNT_NUMBER_FORMAT,
  BROKERS_FORMAT,
  STATUS_FORMAT,
} from '@constants/formatDataString';
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

const AccountTableBody = ({ accountTableBodyData }: AccountTableBodyType) => {
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
            {userName && (
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
            )}
            <TableCell align="center" sx={{ fontSize: '0.7rem' }}>
              {BROKERS_FORMAT[broker_id]}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.7rem' }}>
              {formattingAccountNumber(
                number,
                ACCOUNT_NUMBER_FORMAT[broker_id]
              )}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.75rem' }}>
              {STATUS_FORMAT[status]}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.7rem' }}>
              {accountName}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: '0.7rem' }}
              style={{ color: assetsColorDecider(assets, payments) }}
            >
              {parseInt(assets).toLocaleString()}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.7rem' }}>
              {parseInt(payments).toLocaleString()}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.75rem' }}>
              {is_active ? '활성화' : '비활성화'}
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '0.7rem' }}>
              {created_at.split('').slice(0, 10)}
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  );
};

export default AccountTableBody;

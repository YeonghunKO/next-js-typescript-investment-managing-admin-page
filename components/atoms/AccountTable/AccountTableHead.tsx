import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import type { AccountTableHeaderType } from '@type/atoms/AccountTable';
import React from 'react';

const AccountTableHead = ({
  accountTableHeaderData,
  isCheckbox,
}: AccountTableHeaderType) => {
  return (
    <TableHead>
      <TableRow>
        {isCheckbox ? (
          <TableCell
            key="checkboxHead"
            align="center"
            size="small"
            sx={{ fontSize: '.9rem', padding: '0.5rem', fontWeight: 'bold' }}
          >
            삭제
          </TableCell>
        ) : null}
        {accountTableHeaderData.map((headCell, idx) => (
          <TableCell
            sx={{ fontSize: '.9rem', padding: '0.5rem', fontWeight: 'bold' }}
            key={idx}
            align="center"
          >
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AccountTableHead;

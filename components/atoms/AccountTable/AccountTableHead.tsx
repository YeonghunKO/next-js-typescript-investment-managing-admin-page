import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import type { AccountTableHeaderType } from '@type/atoms/AccountTable';
import React from 'react';

const AccountTableHead = ({
  accountTableHeaderData,
  checkbox,
}: AccountTableHeaderType) => {
  return (
    <TableHead>
      <TableRow>
        {checkbox ? (
          <TableCell key="checkboxHead" align="center" size="small">
            <Checkbox disabled />
          </TableCell>
        ) : null}
        {accountTableHeaderData.map((headCell, idx) => (
          <TableCell sx={{ fontSize: '.8rem' }} key={idx} align="center">
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default AccountTableHead;

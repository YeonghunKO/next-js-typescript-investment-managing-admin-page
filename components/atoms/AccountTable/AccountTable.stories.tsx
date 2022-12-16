import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountTableHead from './AccountTableHead';
import AccountTableBody from './AccountTableBody';
import { Paper, Table, TableContainer } from '@mui/material';

const AccountTable = () => {
  const accountTableHeader = [
    '포켓몬 이름',
    '소속 체육관',
    '번호',
    '건강상태',
    '영어이름',
    '현상금',
    '보유금액',
    '현재 전투여부',
    '탄생일',
  ];
  const accountTableBodyData = [
    {
      userName: '리자몽',
      number: '261',
      broker_id: '240',
      status: 2,
      accountName: 'li za mong',
      assets: '5533453',
      payments: '223425',
      is_active: true,
      created_at: '2022-11-12',
    },
  ];
  return (
    <TableContainer sx={{ height: '100%' }} component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <AccountTableHead accountTableHeaderData={accountTableHeader} />
        <AccountTableBody accountTableBodyData={accountTableBodyData} />
      </Table>
    </TableContainer>
  );
};

export default {
  title: 'Atoms/AccountTable',
  component: AccountTable,
} as ComponentMeta<typeof AccountTable>;

const Template: ComponentStory<typeof AccountTable> = args => <AccountTable />;

export const Basic = Template.bind({});

Basic.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ACCOUNTS_DATA } from 'data/accounts';
import AccountListBoard from './AccountListBoard';

export default {
  title: 'Organisms/AccountListBoard',
  component: AccountListBoard,
} as ComponentMeta<typeof AccountListBoard>;

const Template: ComponentStory<typeof AccountListBoard> = args => (
  <AccountListBoard {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

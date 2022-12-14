import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ACCOUNTS_DATA } from 'data/accounts';
import AccountListNav from './AccountListNav';

export default {
  title: 'Molecules/AccountListNav',
  component: AccountListNav,
} as ComponentMeta<typeof AccountListNav>;

const Template: ComponentStory<typeof AccountListNav> = args => (
  <AccountListNav {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

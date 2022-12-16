import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountListBoard from './AccountListBoard';

export default {
  title: 'Organisms/AccountListBoard',
  component: AccountListBoard,
} as ComponentMeta<typeof AccountListBoard>;

const Template: ComponentStory<typeof AccountListBoard> = args => (
  <AccountListBoard />
);

export const Basic = Template.bind({});

Basic.args = {};

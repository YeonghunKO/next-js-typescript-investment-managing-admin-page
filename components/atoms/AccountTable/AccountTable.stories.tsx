import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountTable from './AccountTable';

export default {
  title: 'Atoms/AccountTable',
  component: AccountTable,
} as ComponentMeta<typeof AccountTable>;

const Template: ComponentStory<typeof AccountTable> = args => (
  <AccountTable {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

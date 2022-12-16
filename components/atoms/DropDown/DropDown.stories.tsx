import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ACCOUNTS_DATA } from 'data/accounts';
import DropDown from './DropDown';

export default {
  title: 'Atoms/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = args => (
  <DropDown {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  data: ACCOUNTS_DATA.accountListBoard.dropDown[0].data,
  label: ACCOUNTS_DATA.accountListBoard.dropDown[0].label,
  updateQueryParamsOnDropDownChange: () => {},
  queryParams: { q: '', pageNum: 1 },
};

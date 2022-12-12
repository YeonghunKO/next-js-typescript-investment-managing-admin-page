import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ACCOUNTS_DATA } from 'data/accounts';
import Sider from './Sider';

export default {
  title: 'Molecules/Sider',
  component: Sider,
} as ComponentMeta<typeof Sider>;

const Template: ComponentStory<typeof Sider> = args => <Sider {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  sider: ACCOUNTS_DATA.sider,
};

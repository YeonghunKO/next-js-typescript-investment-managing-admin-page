import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ACCOUNTS_DATA } from 'data/accounts';
import Layout from './Layout';

export default {
  title: 'Organisms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...ACCOUNTS_DATA,
};

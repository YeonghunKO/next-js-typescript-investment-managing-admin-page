import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginInputForm from './LoginInputForm';

export default {
  title: 'Organisms/LoginInputForm',
  component: LoginInputForm,
} as ComponentMeta<typeof LoginInputForm>;

const Template: ComponentStory<typeof LoginInputForm> = args => (
  <LoginInputForm {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

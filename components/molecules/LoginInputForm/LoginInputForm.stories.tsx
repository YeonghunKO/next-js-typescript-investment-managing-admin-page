import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginInputForm from './LoginInputForm';
import { LOGIN_DATA } from 'data/login';

export default {
  title: 'Molecules/LoginInputForm',
  component: LoginInputForm,
} as ComponentMeta<typeof LoginInputForm>;

const Template: ComponentStory<typeof LoginInputForm> = args => (
  <LoginInputForm {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  input: LOGIN_DATA.input,
};

import { COLOR_VARIANTS } from '@constants/arguments';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginInput from './LoginInput';

export default {
  title: 'Atoms/LoginInput',
  component: LoginInput,
} as ComponentMeta<typeof LoginInput>;

const Template: ComponentStory<typeof LoginInput> = args => (
  <LoginInput {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  placeholder: '이메일 입력해라',
  variant: COLOR_VARIANTS.PRIMARY100,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorModal from './ErrorModal';

export default {
  title: 'Organisms/ErrorModal',
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

const Template: ComponentStory<typeof ErrorModal> = args => (
  <ErrorModal {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  errorMessage: '에러메세지다 이것들아',
};

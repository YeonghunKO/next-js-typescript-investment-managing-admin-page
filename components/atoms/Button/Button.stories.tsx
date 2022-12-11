import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icons from '../Icons';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    icon: {
      options: [...Object.keys(Icons)],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: '버튼',
  width: '10%',
  icon: 'Bell',
};

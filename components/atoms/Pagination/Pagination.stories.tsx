import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';

export default {
  title: 'Atoms/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

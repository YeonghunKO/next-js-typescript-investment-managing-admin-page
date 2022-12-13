import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const Basic = Template.bind({});

Basic.args = {};

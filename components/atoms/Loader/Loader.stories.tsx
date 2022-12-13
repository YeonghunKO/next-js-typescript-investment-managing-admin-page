import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader />;

export const Basic = Template.bind({});

Basic.args = {};

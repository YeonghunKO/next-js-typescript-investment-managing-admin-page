import Theme from '@components/particles/Theme';
import { ROUTER } from '@constants/router';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sider from './Sider';

export default {
  title: 'Molecules/Sider',
  component: Sider,
} as ComponentMeta<typeof Sider>;

const Template: ComponentStory<typeof Sider> = args => <Sider {...args} />;

export const Basic = Template.bind({});

Basic.args = {};

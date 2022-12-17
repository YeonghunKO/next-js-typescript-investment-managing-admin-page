import { IconsKey } from '@components/atoms/Icons/Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sider from './Sider';

const siderData = [
  {
    text: '한국으로',
    href: '/accounts' as const,
    icon: 'Chart' as keyof IconsKey,
    isActive: true,
  },
  {
    text: '일본으로',
    href: '/users' as const,
    icon: 'UserCircle' as keyof IconsKey,
  },
];

export default {
  title: 'Molecules/Sider',
  component: Sider,
} as ComponentMeta<typeof Sider>;

const Template: ComponentStory<typeof Sider> = args => <Sider {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  sider: siderData,
};

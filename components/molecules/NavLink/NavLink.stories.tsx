import Theme from '@components/particles/Theme';
import { ROUTER } from '@constants/router';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavLink from './NavLink';

export default {
  title: 'Molecules/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = args => <NavLink {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: '네브링크',
  href: ROUTER.ACCOUNTS,
  icon: { type: 'Bell' },
  backgroundColor: Theme.grey100,
};

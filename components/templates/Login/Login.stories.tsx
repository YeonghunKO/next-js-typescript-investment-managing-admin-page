import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '@components/templates/Login';
import { LOGIN_DATA } from 'data/login';

export default {
  title: 'Templates/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = args => <Login {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  nextRouter: {
    path: '/',
    asPath: '/',
    query: {
      id: '',
    },
    push: () => {
      console.log('router push');
    },
  },
  data: LOGIN_DATA,
};

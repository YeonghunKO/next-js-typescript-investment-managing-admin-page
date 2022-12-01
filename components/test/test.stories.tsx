import { ComponentStory, ComponentMeta } from '@storybook/react';

import Test from '@components/test/Test';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Test',
  component: Test,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Test>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Test> = args => <Test {...args} />;

export const Basic = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: 'Basic',
};

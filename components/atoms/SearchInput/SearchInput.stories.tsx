import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import SearchInput from './SearchInput';

const MockInput = () => {
  const [queryParams, setQueryParams] = useState({ q: '', pageNum: 1 });

  const handleChange = (value: string) => {
    setQueryParams({ ...queryParams, q: value });
  };

  return (
    <>
      <SearchInput
        queryParams={queryParams}
        updateQueryParamsOnInputChange={handleChange}
      />
      <div>{queryParams.q}</div>
    </>
  );
};

export default {
  title: 'Atoms/SearchInput',
  component: MockInput,
} as ComponentMeta<typeof MockInput>;

const Template: ComponentStory<typeof MockInput> = args => <MockInput />;

export const Basic = Template.bind({});

Basic.args = {};

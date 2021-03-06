import React from 'react';
import { Meta, Story } from '@storybook/react';

import PostItem, { PostItemProps } from './PostItem';

export default {
  component: PostItem,
  title: 'PostItem',
} as Meta;

const Template: Story<PostItemProps> = (args) => <PostItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  post: {
    id: '1',
    firstCategory: '모르겠어요',
    firstCategoryName: 'JOY',
    secondCategory: '기쁨',
    secondCategoryName: 'JOY',
    content:
      '안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.',
    views: 10,
    disclosure: true,
    createdAt: '날짜',
    tags: ['5조', '작업하는 중..'],
    my: false,
  },
};

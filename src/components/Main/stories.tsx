import { Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main
};

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});

export const NewTitle = Template.bind({});
NewTitle.args = {
  title: 'New Title'
};

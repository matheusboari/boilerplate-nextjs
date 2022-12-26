import { Story } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button
};

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Reverse = Template.bind({});
Reverse.args = {
  backgroundColor: 'blue'
};

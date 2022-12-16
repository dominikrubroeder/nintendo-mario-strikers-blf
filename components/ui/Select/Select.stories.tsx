import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const TemplateThemed: ComponentStory<typeof Select> = (args) => (
  <div className="themed">
    <Select {...args} />
  </div>
);

const defaultOptions = [
  { option: 'Option', value: 'option', disabled: false, href: '#' },
  { option: 'Option 2', value: 'option-2', disabled: true, href: '#' },
  { option: 'Option 3', value: 'option-3', disabled: true, href: '#' },
  { option: 'Option 4', value: 'option-4', disabled: false, href: '#' },
  { option: 'Option 5', value: 'option-5', disabled: false, href: '#' },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options: defaultOptions,
};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {
  options: defaultOptions,
};

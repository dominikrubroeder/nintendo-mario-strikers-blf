import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

const TemplateThemed: ComponentStory<typeof Tag> = (args) => (
  <div className="themed">
    <Tag {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Tag',
  variant: 'contained',
};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {
  label: 'Tag',
  variant: 'contained',
};

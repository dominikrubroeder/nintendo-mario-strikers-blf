import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <div className="mx-8">
    <Accordion {...args} />
  </div>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateThemed: ComponentStory<typeof Accordion> = (args) => (
  <div className="themed mx-8">
    <Accordion {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Accordion',
  children: <p>Accordion content</p>,
};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {
  title: 'Accordion',
  children: <p>Accordion content</p>,
};

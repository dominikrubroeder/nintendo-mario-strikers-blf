import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const TemplateThemed: ComponentStory<typeof Card> = (args) => (
  <div className="themed">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <div>Card</div>,
};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {
  children: <div>Card</div>,
};

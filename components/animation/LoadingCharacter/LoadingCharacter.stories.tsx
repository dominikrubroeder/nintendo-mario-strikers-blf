import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingCharacter from '.';
import Card from '../../ui/Card';
import { defaultThemeOption, themeOptions } from '../../../data/storybook';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animation/LoadingCharacter',
  component: LoadingCharacter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    Theme: {
      control: 'select',
      options: themeOptions,
      defaultValue: defaultThemeOption,
    },
  },
} as ComponentMeta<typeof LoadingCharacter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingCharacter> = (args) => (
  <Card className="flex h-screen w-screen items-center justify-center bg-accent p-32">
    <LoadingCharacter {...args} />
  </Card>
);

const TemplateThemed: ComponentStory<typeof LoadingCharacter> = (args) => (
  <Card className="themed flex h-screen w-screen items-center justify-center bg-mario p-32">
    <LoadingCharacter {...args} />
  </Card>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {};

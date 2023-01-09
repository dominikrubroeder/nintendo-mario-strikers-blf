import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NintendoSwitchClick from '.';
import { defaultThemeOption, themeOptions } from '../../../data/storybook';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animation/NintendoSwitchClick',
  component: NintendoSwitchClick,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
      defaultValue: 'red',
    },
    Theme: {
      control: 'select',
      options: themeOptions,
      defaultValue: defaultThemeOption,
    },
  },
} as ComponentMeta<typeof NintendoSwitchClick>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NintendoSwitchClick> = (args) => (
  <div
    className="themed flex h-[95vh] w-full items-center justify-center rounded-3xl pb-12"
    // @ts-ignore
    style={{ backgroundColor: args.backgroundColor }}
  >
    <NintendoSwitchClick {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

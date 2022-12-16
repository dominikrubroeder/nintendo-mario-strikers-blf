import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

const TemplateThemed: ComponentStory<typeof Toggle> = (args) => (
  <div className="themed">
    <Toggle {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  enabledIcon: <EyeIcon className="h-4 w-4" />,
  disabledIcon: <EyeSlashIcon className="h-4 w-4" />,
};

export const Themed = TemplateThemed.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Themed.args = {
  enabledIcon: <EyeIcon className="h-4 w-4" />,
  disabledIcon: <EyeSlashIcon className="h-4 w-4" />,
};

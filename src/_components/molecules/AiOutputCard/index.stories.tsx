import React from 'react';
import { ComponentStory } from '@storybook/react';
import AiOutputCard from './index';

export default {
  title: 'Molecules/AiOutputCard',
  component: AiOutputCard,
};

const Template: ComponentStory<typeof AiOutputCard> = (args) => <AiOutputCard {...args}/>;

export const aiOutputCard = Template.bind({});
aiOutputCard.args = {
    CardHeader: 'Harnessing the Power of the...',
    CardContent: 'Solar energy has been gaining popularity in recent years as a sustainable and cost-effective source of power for homes in India. With rising electricity costs and increasing concerns about the environmental impact of traditional energy sources, many homeowners are turning to solar panels to meet their energy needs. However, one of the most common questions that arise when considering solar power for a home is how many solar panels are needed to run a house and what it cost in India.',
    CardTimeCounter: '3m ago',
};

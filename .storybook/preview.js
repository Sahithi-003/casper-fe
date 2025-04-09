import React from 'react';
import { addDecorator } from '@storybook/react';
import  theme  from '../src/core-utils/theme';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';

addDecorator((story) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <div style={{ margin: 0 }}>{story()}</div>
    </ThemeProvider>
  </StyledEngineProvider>
));
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';

import { ThemeProvider as MaterialUiProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

export const mountWithTheme = children => {
  const theme = createMuiTheme({});
  return mount(
    <StyledComponentProvider theme={theme}>
      <MaterialUiProvider theme={theme}>{children}</MaterialUiProvider>
    </StyledComponentProvider>
  );
};

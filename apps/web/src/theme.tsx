'use client';
import { createTheme } from '@mui/material/styles';
import { ruRU, enUS } from '@mui/material/locale';

export const theme = createTheme(
  {
    cssVariables: {
      colorSchemeSelector: 'class'
    },
    typography: {
      fontFamily: 'var(--font-roboto)'
    },
    colorSchemes: { light: true, dark: true }
  },
  ruRU,
  enUS
);

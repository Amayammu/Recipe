import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import RecipeList from './components/RecipeList';

// Create custom sophisticated black and orange theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6b35',
      light: '#ff8c42',
      dark: '#e55a2b',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1e1e1e',
      light: '#2d2d2d',
      dark: '#0a0a0a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 107, 53, 0.15)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    body1: {
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    body2: {
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    '0 4px 8px rgba(0,0,0,0.12)',
    '0 8px 16px rgba(0,0,0,0.14)',
    '0 12px 24px rgba(0,0,0,0.16)',
    '0 16px 32px rgba(0,0,0,0.18)',
    '0 20px 40px rgba(0,0,0,0.2)',
    '0 24px 48px rgba(0,0,0,0.22)',
    '0 28px 56px rgba(0,0,0,0.24)',
    '0 32px 64px rgba(0,0,0,0.26)',
    '0 36px 72px rgba(0,0,0,0.28)',
    '0 40px 80px rgba(0,0,0,0.3)',
    '0 44px 88px rgba(0,0,0,0.32)',
    '0 48px 96px rgba(0,0,0,0.34)',
    '0 52px 104px rgba(0,0,0,0.36)',
    '0 56px 112px rgba(0,0,0,0.38)',
    '0 60px 120px rgba(0,0,0,0.4)',
    '0 64px 128px rgba(0,0,0,0.42)',
    '0 68px 136px rgba(0,0,0,0.44)',
    '0 72px 144px rgba(0,0,0,0.46)',
    '0 76px 152px rgba(0,0,0,0.48)',
    '0 80px 160px rgba(0,0,0,0.5)',
    '0 84px 168px rgba(0,0,0,0.52)',
    '0 88px 176px rgba(0,0,0,0.54)',
    '0 92px 184px rgba(0,0,0,0.56)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#ff6b35 #1a1a1a',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0a0a0a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ff6b35',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#ff8c42',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'uppercase',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecipeList />
    </ThemeProvider>
  );
}

export default App;


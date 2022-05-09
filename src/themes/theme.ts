import { ThemeConfig, theme as defaultTheme, extendTheme } from '@chakra-ui/react';
import { styles } from './global';
import { colors } from './colors';
import { Container } from './components/Container';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1440px',
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'crypto',
};

const theme = extendTheme({
  config,
  styles,
  colors,
  breakpoints,
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  components: {
    Container,
  },
});

export default theme;

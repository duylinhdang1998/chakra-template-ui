import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

export const colors = {
  ...theme.colors,
  primary: '#3B5264',
  secondary: '#2E3F4D',
};

export type Colors = typeof colors;
export type Color = keyof Colors;

import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props) => ({
    'html, body': {
      fontSize: '14px',
      color: mode('#162A3A', '#fff')(props),
      lineHeight: 'base',
      bg: '#fff',
    },
    a: {
      color: mode('teal.500', 'purple.500')(props),
      textDecoration: 'none',
    },
    li: {
      listStyle: 'none',
      textDecoration: 'none',
    },
  }),
};

import { TextStyle } from 'react-native';

type TypographyVariant = {
  fontFamily?: string;
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
  letterSpacing?: number;
  lineHeight?: number;
};

export const typography: Record<string, TypographyVariant> = {
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
  },
};

export default typography; 
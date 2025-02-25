import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import colors from './colors';
import typography from './typography';

// Combine React Navigation theme with React Native Paper theme
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    ...colors,
  },
};

export { colors, typography, CombinedDarkTheme };
export default CombinedDarkTheme; 
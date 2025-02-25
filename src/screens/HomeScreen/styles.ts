import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  trackItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: colors.surface,
  },
  trackInfo: {
    flex: 1,
  },
  instrumentalTag: {
    color: colors.secondaryText,
    marginTop: 2,
  },
  nowPlayingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surface,
    paddingVertical: 8,
  },
  progressBar: {
    height: 2,
    backgroundColor: colors.accent,
    width: '30%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default styles; 
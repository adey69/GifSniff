import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '~/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  randomGifContainer: {
    marginTop: 16,
  },

  listContainer: {
    paddingBottom: 100,
  },
  gifListItem: {
    width: (Dimensions.get('screen').width - 57) / 3,
    aspectRatio: 1,
    marginBottom: 4,
    marginHorizontal: 3,
  },
});

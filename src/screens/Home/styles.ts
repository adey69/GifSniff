import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '~/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  randomGifContainer: {
    marginTop: 16,
  },
  listContainer: {
    paddingBottom: 100,
    marginTop: 10,
  },
  gifListItem: {
    width: (Dimensions.get('screen').width - 49) / 3,
    aspectRatio: 1,
    marginBottom: 4,
    marginHorizontal: 3,
  },
  searchHint: {
    color: COLORS.lightText,
    marginTop: 2,
  },
});

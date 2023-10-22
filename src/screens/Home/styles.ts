import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '~/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  randomGifContainer: {
    marginTop: 16,
  },
  randomGif: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 8,
  },
  gifTitle: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gifLink: {
    textDecorationLine: 'underline',
    color: COLORS.linkBlue,
  },
  listContainer: {
    paddingBottom: 100,
  },
  gifListItem: {
    width: (Dimensions.get('screen').width - 24) / 3,
    aspectRatio: 1,
  },
});

import { StyleSheet } from 'react-native';
import { COLORS } from '~/theme';

export default StyleSheet.create({
  gifContainer: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    maxWidth: '80%',
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
  ageContainer: {
    backgroundColor: COLORS.darkGrey,
    height: 80,
    width: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  age: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

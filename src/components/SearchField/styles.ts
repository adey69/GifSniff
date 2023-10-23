import { StyleSheet } from 'react-native';
import { COLORS } from '~/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  internalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderGrey,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  closeIcon: {
    padding: 3,
    backgroundColor: COLORS.darkGrey,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 12,
  },
});

import { StyleSheet } from 'react-native';
import colors from '../../utills/colors';
import { FONTS } from '../../utills/const';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  name: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: colors.black,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: colors.textLight,
    marginBottom: 24,
  },
  logout: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: colors.white,
    fontFamily: FONTS.semiBold,
    fontSize: 15,
  },
});

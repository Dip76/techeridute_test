import { StyleSheet } from 'react-native';
import colors from '../../utills/colors';
import { FONTS } from '../../utills/const';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: colors.textLight,
    marginTop: 4,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.error,
    fontFamily: FONTS.regular,
    marginBottom: 12,
  },
  retryBtn: {
    padding: 10,
  },
  retryText: {
    color: colors.primary,
    fontFamily: FONTS.medium,
  },
});

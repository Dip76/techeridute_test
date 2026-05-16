import { StyleSheet } from 'react-native';
import colors from '../../utills/colors';
import { FONTS } from '../../utills/const';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topSection: {
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  logo: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: colors.black,
    marginBottom: 24,
  },
  placeholderBox: {
    width: 120,
    height: 120,
    backgroundColor: '#D8D8D8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  forgot: {
    textAlign: 'right',
    color: colors.textLight,
    fontSize: 12,
    fontFamily: FONTS.regular,
    marginBottom: 4,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    fontSize: 13,
    color: colors.text,
    fontFamily: FONTS.regular,
  },
  signupLink: {
    fontSize: 13,
    color: colors.text,
    fontFamily: FONTS.semiBold,
    textDecorationLine: 'underline',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: colors.textLight,
    fontFamily: FONTS.regular,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  guest: {
    textAlign: 'right',
    marginTop: 20,
    color: colors.textLight,
    fontSize: 13,
    fontFamily: FONTS.regular,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginBottom: 8,
    fontFamily: FONTS.regular,
  },
});

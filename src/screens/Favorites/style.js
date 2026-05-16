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
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: colors.black,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

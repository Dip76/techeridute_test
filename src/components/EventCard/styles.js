import { StyleSheet } from 'react-native';
import colors from '../../utills/colors';
import { FONTS } from '../../utills/const';

export default StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 6,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: colors.black,
    paddingRight: 8,
  },
  date: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: colors.dateGreen,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  price: {
    fontSize: 12,
    color: colors.textLight,
    fontFamily: FONTS.regular,
  },
  location: {
    fontSize: 11,
    color: colors.textLight,
    fontFamily: FONTS.regular,
    maxWidth: '50%',
    textAlign: 'right',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    paddingRight: 60,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.tagBorder,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 10,
    color: colors.textLight,
    fontFamily: FONTS.regular,
  },
  actions: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    padding: 6,
    marginLeft: 4,
  },
});

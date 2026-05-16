import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../utills/colors';
import { FONTS } from '../../utills/const';

const CustomNoDataFound = ({ message = 'No data found' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    fontSize: 15,
    color: colors.textLight,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
});

export default CustomNoDataFound;

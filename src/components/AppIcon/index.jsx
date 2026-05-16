import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utills/colors';

const ICON_FAMILIES = {
  feather: Feather,
  ionicons: Ionicons,
  fa5: FontAwesome5,
};

const AppIcon = ({
  name,
  family = 'feather',
  size = 22,
  color = colors.text,
  style,
  solid = false,
  brand = false,
}) => {
  const IconComponent = ICON_FAMILIES[family] || Feather;

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={style}
      solid={solid}
      brand={brand}
    />
  );
};

export default AppIcon;

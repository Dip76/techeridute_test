import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppIcon from '../components/AppIcon';
import Events from '../screens/Events';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import colors from '../utills/colors';
import { FONTS } from '../utills/const';

const Tab = createBottomTabNavigator();

const TAB_ICON_SIZE = 26;

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      }}>
      <Tab.Screen
        name="SearchTab"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <AppIcon name="search" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EventsTab"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <AppIcon name="calendar" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouritesTab"
        component={Favorites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ focused }) => (
            <AppIcon
              family="ionicons"
              name={focused ? 'heart' : 'heart-outline'}
              size={TAB_ICON_SIZE}
              color={focused ? '#E53935' : colors.textLight}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AppIcon name="user" size={TAB_ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopColor: colors.border,
  },
  tabLabel: {
    fontSize: 11,
    fontFamily: FONTS.medium,
    marginTop: 2,
  },
});

export default BottomTabNavigation;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites } from '../../redux/reducers/favoriteSlice';
import { logout } from '../../redux/reducers/authSlice';
import { STORAGE_KEYS } from '../../utills/const';
import styles from './style';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, isGuest } = useSelector(state => state.auth);

  const handleLogout = async () => {
    await AsyncStorage.removeMany([
      STORAGE_KEYS.TOKEN,
      STORAGE_KEYS.USER,
      STORAGE_KEYS.GUEST,
    ]);
    dispatch(clearFavorites());
    dispatch(logout());
    navigation.getParent()?.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const displayName = isGuest
    ? 'Guest User'
    : `${user?.usr_fname || ''} ${user?.usr_lname || ''}`.trim();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{displayName || 'Profile'}</Text>
      {!isGuest && user?.usr_email ? (
        <Text style={styles.email}>{user.usr_email}</Text>
      ) : null}

      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>
          {isGuest ? 'Back to Login' : 'Logout'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

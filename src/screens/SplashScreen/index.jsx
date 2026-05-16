import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setCredentials, setGuest } from '../../redux/reducers/authSlice';
import { STORAGE_KEYS } from '../../utills/const';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    const bootstrap = async () => {
      try {
        const [token, userJson, guest] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.TOKEN),
          AsyncStorage.getItem(STORAGE_KEYS.USER),
          AsyncStorage.getItem(STORAGE_KEYS.GUEST),
        ]);

        if (!mounted) {
          return;
        }

        if (token && userJson) {
          dispatch(
            setCredentials({
              token,
              user: JSON.parse(userJson),
            }),
          );
          navigation.replace('Main');
          return;
        }

        if (guest === 'true') {
          dispatch(setGuest());
          navigation.replace('Main');
          return;
        }

        navigation.replace('Login');
      } catch (e) {
        navigation.replace('Login');
      }
    };

    const timer = setTimeout(bootstrap, 1500);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pliē</Text>
    </View>
  );
};

export default SplashScreen;

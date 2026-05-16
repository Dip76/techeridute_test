import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../api';
import AppIcon from '../../components/AppIcon';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import colors from '../../utills/colors';
import { setCredentials, setGuest } from '../../redux/reducers/authSlice';
import { STORAGE_KEYS } from '../../utills/const';
import styles from './style';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const saveSession = async (token, user) => {
    await AsyncStorage.setMany({
      [STORAGE_KEYS.TOKEN]: token,
      [STORAGE_KEYS.USER]: JSON.stringify(user),
      [STORAGE_KEYS.GUEST]: 'false',
    });
    dispatch(setCredentials({ token, user }));
    navigation.replace('Main');
  };

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      setError('Please enter email and password');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await loginUser(email, password);
      console.log('Login response >>>> ', res);
      if (res.success && res.data?.token) {
        await saveSession(res.data.token, res.data.user);
      } else {
        setError(res.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'Unable to login');
    } finally {
      setLoading(false);
    }
  };

  const enterAsGuest = async () => {
    await AsyncStorage.setMany({
      [STORAGE_KEYS.TOKEN]: '',
      [STORAGE_KEYS.USER]: '',
      [STORAGE_KEYS.GUEST]: 'true',
    });
    dispatch(setGuest());
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Text style={styles.logo}>Pliē</Text>
          <View style={styles.placeholderBox}>
            <AppIcon name="image" size={48} color="#AAAAAA" />
          </View>
        </View>

        <View style={styles.formSection}>
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <CustomTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="email@email.com"
            keyboardType="email-address"
          />
          <CustomTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity onPress={() => Alert.alert('Forgot password')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton title="Sign In" onPress={handleLogin} loading={loading} />

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Not a member? </Text>
            <TouchableOpacity
              onPress={() => Alert.alert('Sign up', 'Sign up is not part of this demo.')}>
              <Text style={styles.signupLink}>Sign Up Here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or Sign In with:</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <AppIcon
                family="fa5"
                name="google"
                brand
                size={22}
                color="#DB4437"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <AppIcon
                family="fa5"
                name="apple"
                brand
                size={24}
                color={colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <AppIcon
                family="fa5"
                name="facebook"
                brand
                size={22}
                color="#4267B2"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={enterAsGuest}>
            <Text style={styles.guest}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

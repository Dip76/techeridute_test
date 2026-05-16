import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { fetchEvents } from '../../api';
import CustomNoDataFound from '../../components/CustomNoDataFound';
import EventCard from '../../components/EventCard';
import { getFavoriteId } from '../../utills/helper';
import styles from './style';

const Events = () => {
  const { token, user, isGuest } = useSelector(state => state.auth);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const firstName = user?.usr_fname || (isGuest ? 'Guest' : 'Renzo');

  const loadEvents = useCallback(async () => {
    setError('');
    try {
      const res = await fetchEvents(token || undefined);
      if (res.success) {
        setEvents(res.data?.events || []);
      } else {
        setError(res.message || 'Failed to load events');
      }
    } catch (err) {
      setError(err.message || 'Failed to load events');
    }
  }, [token]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await loadEvents();
      setLoading(false);
    };
    init();
  }, [loadEvents]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadEvents();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#4ABAA3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello {firstName}!</Text>
        <Text style={styles.subtitle}>Are you ready to dance?</Text>
      </View>

      {error ? (
        <View style={styles.center}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={loadEvents}>
            <Text style={styles.retryText}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={events}
          keyExtractor={item => getFavoriteId(item)}
          renderItem={({ item }) => <EventCard event={item} />}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <CustomNoDataFound message="No events available right now" />
          }
        />
      )}
    </View>
  );
};

export default Events;

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomNoDataFound from '../../components/CustomNoDataFound';
import EventCard from '../../components/EventCard';
import { selectFavorites } from '../../redux/reducers/favoriteSlice';
import { getFavoriteId } from '../../utills/helper';
import styles from './style';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favourites</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={item => getFavoriteId(item)}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={[
          styles.list,
          favorites.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={
          <CustomNoDataFound message="You have not added any favourites yet" />
        }
      />
    </View>
  );
};

export default Favorites;

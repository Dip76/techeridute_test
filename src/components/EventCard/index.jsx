import React from 'react';
import {
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppIcon from '../AppIcon';
import {
  selectIsFavorite,
  toggleFavorite,
} from '../../redux/reducers/favoriteSlice';
import colors from '../../utills/colors';
import {
  formatEventDate,
  formatPrice,
  getEventTags,
} from '../../utills/helper';
import styles from './styles';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectIsFavorite(state, event));

  const dateText = formatEventDate(
    event.readable_from_date,
    event.readable_to_date,
  );
  const priceText = formatPrice(event.event_price_from, event.event_price_to);
  const location = [event.city, event.country].filter(Boolean).join(', ');
  const tags = getEventTags(event);

  const onShare = async () => {
    try {
      await Share.share({
        message: `${event.event_name}\n${event.event_url || ''}`,
      });
    } catch (e) {
      // user cancelled
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: event.event_profile_img }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={2}>
            {event.event_name}
          </Text>
          <AppIcon
            name="chevron-right"
            size={20}
            color={colors.textLight}
          />
        </View>

        {dateText ? <Text style={styles.date}>{dateText}</Text> : null}

        <View style={styles.metaRow}>
          {priceText ? <Text style={styles.price}>{priceText}</Text> : <View />}
          {location ? (
            <Text style={styles.location} numberOfLines={1}>
              {location}
            </Text>
          ) : null}
        </View>

        <View style={styles.tagsRow}>
          {tags.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn} onPress={onShare}>
            <AppIcon
              name="share-2"
              size={18}
              color={colors.textLight}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => dispatch(toggleFavorite(event))}>
            <AppIcon
              family="ionicons"
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? colors.primary : colors.textLight}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventCard;

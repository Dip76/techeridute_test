export const formatEventDate = (from, to) => {
  if (!from) {
    return '';
  }
  if (to && to.trim() !== '') {
    return `${from} - ${to}`;
  }
  return from;
};

export const formatPrice = (from, to) => {
  const min = Number(from);
  const max = Number(to);

  if (min === 0 && max === 0) {
    return '';
  }
  if (min === max) {
    return `€${min}`;
  }
  return `€${min} - €${max}`;
};

export const getEventTags = event => {
  const tags = [];

  if (event.keywords?.length) {
    tags.push(...event.keywords);
  }

  if (event.danceStyles?.length) {
    event.danceStyles.forEach(style => {
      if (style.ds_name) {
        tags.push(style.ds_name);
      }
    });
  }

  return [...new Set(tags)].slice(0, 4);
};

export const getFavoriteId = event =>
  String(event.event_date_id || event.event_id);

import { ENDPOINTS } from '../constants/api';
import { apiPost } from './client';

export async function fetchEvents(token) {
  return apiPost(ENDPOINTS.EVENTS, null, token);
}

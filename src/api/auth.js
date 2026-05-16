import { ENDPOINTS } from '../constants/api';
import { apiPost } from './client';

export async function loginUser(email, password) {
  console.log('loginUser', email, password);
  const formData = new FormData();
  formData.append('email', email.trim());
  formData.append('password', password);

  return apiPost(ENDPOINTS.LOGIN, formData);
}

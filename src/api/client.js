export async function apiPost(url, formData, token) {
  const headers = {
    Accept: 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options = {
    method: 'POST',
    headers,
  };

  // Empty FormData breaks fetch on Android — only attach when we have fields
  if (formData) {
    options.body = formData;
  }

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || 'Something went wrong');
  }

  return json;
}

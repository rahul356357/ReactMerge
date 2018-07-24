const fireRequest = async (method, url, data) => {
  const fullUrl = `${url}`;
  const options = {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      tokenId: localStorage.getItem('auth_token'),
    },
  };
  const response = await fetch(fullUrl, options);
  const json = await response.json();
  return response.ok ? json : Promise.reject(json);
};

export default {
  get(url) {
    return fireRequest('GET', url);
  },

  post(url, data) {
    return fireRequest('POST', url, data);
  },

  put(url, data) {
    return fireRequest('PUT', url, data);
  },

  delete(url) {
    return fireRequest('DELETE', url);
  },
};

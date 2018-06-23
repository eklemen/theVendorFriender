const API = 'http://127.0.0.1:8080';
const BASE = API + '/api';

export default {
  login: `${API}/auth/instagram?provider=instagram`,
  logout: `${API}/auth/logout`,
  users: `${BASE}/users`,
  self: `${BASE}/users/self`,
  selfEventList: `${BASE}/users/self/events`,
  getToken: `${API}/token/callback`,
  events: `${BASE}/events`,
  userContacts: (uuid) => `${BASE}/users/${uuid}/contacts`
}

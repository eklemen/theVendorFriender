import Query from '../shared/Query';
import api from './endpoints';

export function getMyEventsList() {
  const endpoint = api.selfEventList;
  return Query({
    endpoint,
    name: 'MyEventsList'
  });
}

export function getToken(code) {
  const endpoint = `${api.getToken}?code=${code}`;
  return Query({
    endpoint,
    name: 'User'
  })
}

export function getSelf() {
  const endpoint = api.self;
  return Query({
    endpoint,
    name: 'User'
  })
}

export function addContact(uuid) {
  const endpoint = api.userContacts(uuid);
  return Query({
    endpoint,
    name: 'Contacts',
    method: 'post'
  })
}
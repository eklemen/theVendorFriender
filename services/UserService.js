import {Query} from '../shared/Query/Query';
import api from './endpoints';

export function getMyEventsList() {
  const endpoint = api.selfEventList;
  return Query({
    endpoint,
    name: 'MyEventsList'
  });
}

export const getTokenFromCode = code => {
  const endpoint = `${api.getToken}?code=${code}`;
  return Query({
    endpoint,
    name: 'AuthToken'
  });
};

export const getSelf = () => {
  const endpoint = api.self;
  return Query({
    endpoint,
    name: 'User'
  })
};

export const getOwnContacts = (uuid) => {
  const endpoint = api.userContacts(uuid);
  return Query({
    endpoint,
    name: 'MyContacts'
  });
};

export const addContact = (uuid) => {
  const endpoint = api.userContacts(uuid);
  return Query({
    endpoint,
    hotSwap: true,
    name: 'MyContacts',
    method: 'post'
  })
};
import Query from '../shared/Query';
import api from './endpoints';
import axios from 'axios';

export function getMyEventsList() {
  const endpoint = api.selfEventList;
  return Query({
    endpoint,
    name: 'MyEventsList'
  });
}

export function getToken(code) {
  const endpoint = `${api.getToken}?code=${code}`;
  // return Query({
  //   endpoint,
  //   name: 'User'
  // })
  return dispatch => {
    dispatch({type: `QUERY_PENDING_User`, payload: {name: 'User'}})
    return axios({
      url: endpoint,
      method: 'get'
    }).then(res => {
        return dispatch({
          type: `QUERY_FULFILLED_User`,
          payload: {
            data: res.data,
            name: 'User'
          }
        })
      },
      err => {
        return dispatch({
          type: `QUERY_REJECTED_User`,
          payload: {
            data: err,
            name: 'User'
          }
        })
      })
  }
};

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
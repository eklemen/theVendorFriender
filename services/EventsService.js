import {Query} from '../shared/Query/Query';
import api from './endpoints';

export function getEventDetails(uuid) {
  const endpoint = `${api.events}/${uuid}`;
  return Query({
    endpoint,
    hotSwap: true,
    name: 'EventDetails',
  });
}

export function reportUser(eventId, userId) {
  const endpoint = `${api.events}/${eventId}/report/${userId}`;
  return Query({
    endpoint,
    name: 'ReportUser',
    method: 'put'
  })
}

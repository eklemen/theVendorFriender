import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();

export const Query = (
  {
    name, // required
    endpoint,
    reqObject,
    params = {},
    headers = {},
    method = 'get',
    saveToStore = true,
    hotSwap,
    ...rest
  }
) => {
  return dispatch => {
    if (typeof name !== 'string') {
      throw new Error('Must provide a `name` for this query.');
    }
    if (hotSwap) {
      dispatch({
        type: `QUERY_PENDING_${name}_UPDATE`,
        payload: {name}
      })
    } else {
      dispatch({type: `QUERY_PENDING_${name}`, payload: {name}});
    }
    return axios({
      method: method,
      url: endpoint,
      data: reqObject,
      params,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...rest
    }).then(res => {
        if (!saveToStore) {
          return dispatch({
            type: `QUERY_FULFILLED_${name}_NO_SAVE`,
            payload: {name}
          })
        }
        return dispatch({
          type: `QUERY_FULFILLED_${name}`,
          payload: {
            data: res.data,
            name: name
          }
        })
      },
      err => {
        return dispatch({
          type: `QUERY_REJECTED_${name}`,
          payload: {
            data: err,
            name
          }
        })
      })
  }
};

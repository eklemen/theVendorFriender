export default function Query (
  state = {},
  action = {
    type: null,
    payload: null
  }
) {
  if(!action.payload || !action.payload.name) {
    return state;
  }
  switch (action.type) {
    case `QUERY_PENDING_${action.payload.name}`:
      return {
        ...state,
        [action.payload.name] : {
          fetching:   true,
          fetched:    false,
          data:   null,
          error:      null
        }
      };
    case `QUERY_FULFILLED_${action.payload.name}`:
      return {
        ...state,
        [action.payload.name] : {
          fetching:   false,
          fetched:    true,
          data:   action.payload.data,
          error:      null
        }
      };
    case `QUERY_REJECTED_${action.payload.name}`:
      return {
        ...state,
        [action.payload.name] : {
          fetching:   false,
          fetched:    true,
          data:   null,
          error:      action.payload.data
        }
      };
    case `QUERY_FULFILLED_${action.payload.name}_NO_SAVE`:
      return {
        ...state,
        [action.payload.name] : {
          fetching:   false,
          fetched:    true,
          error:      null
        }
      };
    default:
      return state;
  }
}

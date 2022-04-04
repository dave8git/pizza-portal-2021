import Axios from 'axios';
import {
  api,
} from '../settings';

/* selectors */
export const getAll = ({
  tables,
}) => tables.data;
export const getLoadingState = ({
  tables,
}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const TABLE_STATUS = createActionName('TABLE_STATUS');


/* action creators */
export const fetchStarted = payload => ({
  payload,
  type: FETCH_START,
});
export const fetchSuccess = payload => ({
  payload,
  type: FETCH_SUCCESS,
});
export const fetchError = payload => ({
  payload,
  type: FETCH_ERROR,
});
export const tableStatus = payload => ({
  payload,
  type: TABLE_STATUS,
});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const setTableStatus = (payload) => {
  return (dispatch, getState) => {
    //dispatch(fetchStarted());
    console.log(payload);
    Axios
      .put(`${api.url}/api/${api.tables}/${payload.id}`, {
        status: payload.status,
      }) // post vs put - jako dobrą praktykę postem wysyłamy cały obiekt który mamy w bazie, a put tylko to co się zmienia (resztę robi backend)
      .then(res => {
        //console.log(res.data);
        dispatch(tableStatus(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      console.log('action.payload', action.payload);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case TABLE_STATUS: {
      console.log('statePart', statePart);
      console.log('statePart.data', statePart.data); 
      console.log('action.payload', action.payload);
    }
    default:
      return statePart;
  }
}

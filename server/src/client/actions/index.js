export const FETCH_USERS = 'fetch_users'; //type

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users'); // api is the custom axios instance provided by redux thunk
  //so its distinguished in server and browser. we setup this instances for authentication needs
  //for other requests to other regular api endpoints we should use the default instance.
  dispatch({ type: FETCH_USERS, payload: res });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export const FETCH_ADMINS = 'fetch_admins';

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};

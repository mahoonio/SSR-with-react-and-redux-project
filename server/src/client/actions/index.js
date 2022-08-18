export const FETCH_USERS = 'fetch_users'; //type

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users'); // api is the custom axios instance provided by redux thunk
  //so its distinguished in server and browser
  dispatch({ type: FETCH_USERS, payload: res });
};

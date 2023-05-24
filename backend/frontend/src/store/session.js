const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

// POJO action creators 
const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});

const removeCurrentUser = (user) => ({
    type: REMOVE_CURRENT_USER,
});

export const login = ({ credential, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

// reducer 
const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER;
            return { ...state, user: action.payload }
        case REMOVE_CURRENT_USER;
            return { ...state, user: action.payload }
        default:
            return state; 
    }
};

export default sessionReducer; 
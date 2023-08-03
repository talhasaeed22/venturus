// store.js
import { createStore } from 'redux';

const getInitialLocalUser = () => {
  if (typeof window !== 'undefined') {
    const localUserData = JSON.parse(localStorage.getItem('localUser'));
    return localUserData || null;
  }
  return null;
};

const initialState = {
  generatedReport: null,
  signedInUser: getInitialLocalUser(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENERATED_REPORT':
      return {
        ...state,
        generatedReport: action.payload,
      };
    case 'SET_SIGNEDIN_USER':
      return {
        ...state,
        signedInUser: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

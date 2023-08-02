// store.js
import { createStore } from 'redux';

const initialState = {
  generatedReport: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENERATED_REPORT':
      return {
        ...state,
        generatedReport: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

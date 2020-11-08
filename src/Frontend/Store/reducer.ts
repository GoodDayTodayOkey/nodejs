import { combineReducers } from 'redux';

export const store = {
  data: null
};

const data = (state = store.data, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  data
});

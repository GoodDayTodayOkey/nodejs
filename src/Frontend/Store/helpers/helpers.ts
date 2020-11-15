const actionCreator = (asyncTypes, createThunk) => (...args) => {
  const thunk = createThunk(...args);

  return dispatch => {
    dispatch({ type: `${asyncTypes.name}_PENDING`});
    return thunk.then(payload => dispatch(({
        type: `${asyncTypes.name}_COMPLETE`,
        payload: asyncTypes.transformPayload(payload),
      })))
      .catch(error => dispatch(({
        type: `${asyncTypes.name}_ERROR`,
        error: true,
        payload: asyncTypes.transformPayload(error),
      })));
  };
};

const reducerCreator = (asyncStates) => {
  return (state = {loading: false, loaded: false, data: null}, action) => {
    switch (action.type) {
      case `${asyncStates.name}_PENDING`:
        return {
          loading: true,
          loaded: false,
          data: state.data
        }
      case `${asyncStates.name}_ERROR`:
        return {
          loading: false,
          loaded: false,
          error: action.payload,
          data: state.data
        }
      case `${asyncStates.name}_COMPLETE`:
        return {
          loading: false,
          loaded: true,
          data: action.payload
        }
      default:
        return state
    }
  }
}

export {actionCreator, reducerCreator};
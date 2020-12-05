

const creator = (asyncTypes) => ({
  sagaWatcher: asyncTypes.watcherSagaTempate({
    type: asyncTypes.type,
    saga: asyncTypes.sagaTempate({ api: asyncTypes.api, query: asyncTypes.query, transformPayload: asyncTypes.transformPayload }) 
  }) ,
  action: () => (params) => ({type: asyncTypes.type, payload: params})
});

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

export {reducerCreator, creator};
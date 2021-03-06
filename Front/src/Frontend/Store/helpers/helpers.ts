const creator = (asyncTypes) => {
  return ({
    sagaWatcher: asyncTypes.watcherSagaTemplate({
      type: asyncTypes.type,
      saga: asyncTypes.sagaTemplate({ api: asyncTypes.api, query: asyncTypes.query, transformPayload: asyncTypes.transformPayload }) 
    }),
    action: (dispatch) => (payload) => (event)=> dispatch({type: asyncTypes.type, payload, event})
  })
}

const reducerCreator = (asyncStates) => {
  return (state = {loading: false, loaded: false, data: null}, action) => {
    switch (action.type) {
      case `${asyncStates.name}_PENDING`:
        return {
          loading: true,
          loaded: false,
          data: state.data
        }
      case `${asyncStates.name}_COMPLETE`:
        return {
          loading: false,
          loaded: true,
          data: action.payload
        }
      case `${asyncStates.name}_ERROR`:
        return {
          loading: false,
          loaded: false,
          error: action.payload,
          data: state.data
        }
        default:
        return state
    }
  }
}

export {reducerCreator, creator};
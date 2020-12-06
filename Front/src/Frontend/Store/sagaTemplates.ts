import { call, put, takeEvery } from 'redux-saga/effects';

export const simpleSagaTemplate = ({api, query, transformPayload}) => function* simpleSaga(action) {
    try {
       yield put({type: `${action.type}_PENDING`})
       const data = yield call(api, query(action.payload))
       const tranformedPayload = transformPayload(data)
       yield put({type: `${action.type}_COMPLETE`, payload: tranformedPayload})
    } catch (error) {
       yield put({type: `${action.type}_ERROR`, error})
    }
 }

 export const simpleWatcherSagaTemplate = function* simpleSagaWatcher({type, saga}) {
   yield takeEvery(type, saga)
}

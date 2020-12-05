import { call, put, takeEvery } from 'redux-saga/effects';

export const simpleSagaTemplate = ({api, query, transformPayload}) => function* simpleSaga(action) {
    try {
       yield put({type: `${action.type}_PENDING`})
       const data = yield call(api, query(action.payload))
       const tranformedPayload = transformPayload(data)
       yield put({type: `${action.type}_COMPLETE`, tranformedPayload})
    } catch (error) {
       yield put({type: `${action.type}_ERROR`, error})
    }
 }

 export const simpleWatcherSagaTemplate = ({type, saga}) => function* simpleSagaWatcher() {
   yield takeEvery(type, saga)
}

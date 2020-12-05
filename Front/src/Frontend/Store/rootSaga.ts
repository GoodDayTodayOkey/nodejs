import {getMainItems} from 'Page/Main/creators/creators';

function* rootSaga() {
   yield getMainItems.sagaWatcher;
}

export default rootSaga;

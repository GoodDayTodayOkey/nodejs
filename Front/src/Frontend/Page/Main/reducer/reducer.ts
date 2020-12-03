import { Reducer } from 'redux';
import {reducerCreator} from 'Store/helpers/helpers';

const mainItems = reducerCreator({name: 'GET_MAIN_ITEMS'});

export {mainItems};


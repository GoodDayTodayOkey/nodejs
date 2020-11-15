import {actionCreator} from 'Store/helpers/helpers';

const getMainItems = actionCreator(
    {
      name: 'GET_MAIN_ITEMS',
      transformPayload: payload => payload,
    },
    items => Promise.resolve({ "counter": items, "name": "Nike" }),
);

export default {getMainItems};
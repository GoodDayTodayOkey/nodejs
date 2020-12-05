import { creator } from 'Store/helpers/helpers';
import { simpleSagaTemplate, simpleWatcherSagaTemplate } from 'Store/sagaTemplates';
import { GET_MAIN_ITEMS } from 'Page/Main/constants/constants';
import { GET_MAIN_ITEMS_QUERY } from 'Page/Main/queries/queries';
import api from 'Api/Api';

const getMainItems = creator({
  type: GET_MAIN_ITEMS,
  query: GET_MAIN_ITEMS_QUERY,
  watcherSagaTempate: simpleWatcherSagaTemplate,
  sagaTemplate: simpleSagaTemplate,
  transformPayload: payload => payload.mainItems,
  api: api.graphql
}); 

export {getMainItems};
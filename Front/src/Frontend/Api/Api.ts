const axios = require('axios');


class Api {
  private axiosInstance:any =  axios.create({
    baseURL: 'https://localost:8080/',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });

  public post = ({path, params}):Promise<any> => {
    // this.instance.post(url, {data});
    return Promise.resolve({ "mainItems":  {loading: false, loaded: true, data: { "counter": 6, "name": "Nike" }}   })
  }

  public graphql = async (query):Promise<any> => await this.axiosInstance.post('/graphql', JSON.stringify(query)) 
}

const api = new Api();
export default api;
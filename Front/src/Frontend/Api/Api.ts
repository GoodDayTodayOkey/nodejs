const axios = require('axios');


class Api {
  private axiosInstance:any =  axios.create({
    baseURL: 'http://localhost:8080',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });

  public get = ({path, params}):Promise<any> => {
    // this.instance.post(url, {data});
    return Promise.resolve({ "mainItems":  {loading: false, loaded: true, data: { "counter": 6, "name": "Nike" }}   })
  }

  public graphql = async query => await this.axiosInstance.post('/graphql', JSON.stringify({query})).then(res => res.data.data)
}

const api = new Api();
export default api;
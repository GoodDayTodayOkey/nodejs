const axios = require('axios');


class Api {
    private instance:any =  axios.create({
        baseURL: 'https://localost:8080/',
    });
    public getApi = ({path, params}):Promise<any> => {
        // this.instance.get(url, {params});
        return Promise.resolve({ "mainItems":  {loading: false, loaded: true, data: { "counter": 6, "name": "Nike" }}  })
    }
    public postApi = ({path, params}):Promise<any> => {
        // this.instance.post(url, {data});
        return Promise.resolve({ "mainItems":  {loading: false, loaded: true, data: { "counter": 6, "name": "Nike" }}   })
    }
}

const api = new Api();
export default api;
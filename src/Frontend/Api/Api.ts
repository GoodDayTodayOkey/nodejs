const axios = require('axios');

class Api {
    private instance:any =  axios.create({
        baseURL: 'https://localost:8080/',
    });
    public getApi = ({path, params}):Promise<any> => {
        // this.instance.get(url, {params});
        console.log('path', path, 'params', params);
        return Promise.resolve({ "data": { "counter": 6, "name": "Nike" } })
    }
    public postApi = ({path, data}):Promise<any> => {
        // this.instance.post(url, {data});
        return Promise.resolve({ "data": { "counter": 5, "name": "Nike" } })
    }
}

const api = new Api();
export default api;
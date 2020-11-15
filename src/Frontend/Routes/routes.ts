import About from 'Page/About/About';
import Basket from 'Page/Basket/Basket';
import Catalog from 'Page/Catalog/Catalog';
import Main from 'Page/Main/Main';
import Payment from 'Page/Payment/Payment';
import Reviews from 'Page/Reviews/Reviews';
import Goods from 'Page/Goods/Goods';
import api from 'Api/Api'

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/about',
        exact: true,
        component: About,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/basket',
        exact: true,
        component: Basket,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/catalog',
        exact: true,
        component: Catalog,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/payment',
        exact: true,
        component: Payment,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/reviews',
        exact: true,
        component: Reviews,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
    {
        path: '/goods/:id',
        exact: true,
        component: Goods,
        getInitalState: async (path: string, params: {[key: string]: string}):Promise<any> => {
            return await api.getApi({path, params});
        },
    },
]

export default routes;
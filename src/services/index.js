import axios from "axios";

const createBackendServer = (baseURL) => {
    const api = axios.create({
        baseURL: `${baseURL}api`,
        headers: {Accept: 'application/json'},
        timeout: 60 * 1000
    });


    /*==========    GET REQUESTS    ==========*/
    const getExample = () => api.get('/get');
    /*==========    POST REQUESTS    ==========*/
    const postExample = () => api.post('/post');
    /*==========    PUT REQUESTS    ==========*/
    const putExample = () => api.put('/put');
    /*==========    DELETE REQUESTS    ==========*/
    const deleteExample = () => api.delete('/delete');


    return {getExample, postExample, putExample, deleteExample}

};


const apis = createBackendServer(process.env['SERVER_URL'])
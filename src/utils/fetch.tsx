import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST;
const PROTOCOL = process.env.REACT_APP_PROTOCOL;

const fetch = () => {
    const api = axios.create({ baseURL: `${PROTOCOL}://${HOST}`});
    return api;
}

export default fetch;
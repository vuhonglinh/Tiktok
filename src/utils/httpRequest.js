import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (api, option = {}) => {
    const response = await httpRequest.get(api, option);
    return response.data;
};

export default httpRequest;

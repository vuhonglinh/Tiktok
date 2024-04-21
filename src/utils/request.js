import axios from 'axios';

const requests = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, option = {}) => {
    const response = await requests.get(api, option);
    return response.data;
};

export default requests;

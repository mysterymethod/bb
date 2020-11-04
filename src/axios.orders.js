import axios from 'axios';

const instance = axios.create({
    baseURL = 'https://burger-642ac.firebaseio.com/';
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-r-app.firebaseio.com/'
});

export default instance;
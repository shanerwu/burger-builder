import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e687c.firebaseio.com/'
});

export default instance;
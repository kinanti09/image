import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 80d34443efaeeade5db4fc3310b701ed403ef20d324231595c30ff1d8e816c69'
    }
});
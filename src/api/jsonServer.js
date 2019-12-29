import axios from 'axios';
export default axios.create({
    baseURL:'http://meid.me/api',
    headers: {'Access-Control-Allow-Origin': '*'}
    
});
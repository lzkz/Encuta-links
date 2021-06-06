import axios from 'axios';

///key 5fbf64affba569380915c13434d0b47c7cdd7b67

///  base url: https://api-ssl.bitly.com/v4/

export const key = '5fbf64affba569380915c13434d0b47c7cdd7b67';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;


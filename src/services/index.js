import axios from 'axios'

export const axiosService = () => {
    const instance = axios.create({
            baseURL: `/api`,
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return instance;
    // return instance.then(res => res);
}

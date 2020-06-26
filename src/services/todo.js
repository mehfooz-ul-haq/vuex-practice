import { axiosService } from './index';

export class TodoService {

    getTodos() {

        return axiosService()
                .get('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.data);

    }

}
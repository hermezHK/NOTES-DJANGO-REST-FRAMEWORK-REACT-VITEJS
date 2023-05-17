import axios from 'axios';

const tasksApi = axios.create({
   baseURL: 'http://127.0.0.1:8000/api/v1/tasks',
})

/* request to backend  */
export const getALLTasks = () =>  tasksApi.get('');


export const createTask = (task) => tasksApi.post('', task);

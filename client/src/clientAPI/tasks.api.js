import axios from 'axios';

const tasksApi = axios.create({
   baseURL: 'http://127.0.0.1:8000/api/v1/tasks/',
})

/* request to backend 'GET', 'POST', 'PUT' */
export const getALLTasks = () =>  tasksApi.get('');

export const createTask = (task) => tasksApi.post('', task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

import axios from 'axios';

export const getALLTasks = () => {
   return axios.get('http://127.0.0.1:8000/api/v1/tasks')
}
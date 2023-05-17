import { useEffect, useState } from "react";
import { getALLTasks } from "../clientAPI/tasks.api";
import { TaskCard } from "./TasksCard";


export function TasksList() {
  const[tasks, setTasks] = useState([]);  

  useEffect(() => {
    async function loadTasks() {
      const res = await getALLTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return <div>
    {tasks.map(task => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>;
}

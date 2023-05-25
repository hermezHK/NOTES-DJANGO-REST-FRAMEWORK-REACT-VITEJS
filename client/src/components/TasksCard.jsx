/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur"></div>
    <div
      className=" relative bg-black p-4 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
      onClick={() => { navigate(`/tasks/${task.id}`)}}
    >
      <h1 className="font-bold uppercase text-pink-400">{task.title}</h1>
      <p className="text-indigo-500">{task.description}</p>
      <hr />
    </div>
    </div>
  );
}

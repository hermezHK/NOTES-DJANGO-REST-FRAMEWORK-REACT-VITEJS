import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-indigo-500 mb-5">Notes APP</h1>
      </Link>
      <button className="bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-800 hover:cursor-pointer">
        <Link to="/tasks-create">Create Note</Link>
      </button>
    </div>
  );
}

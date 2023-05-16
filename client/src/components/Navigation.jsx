import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/tasks">
        <h1>Notes APP</h1>
      </Link>
      <Link to="/tasks-create">Create Note</Link>
    </div>
  );
}

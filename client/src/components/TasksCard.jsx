/* eslint-disable react/prop-types */

export function TaskCard({ task }) {
  return (
      <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <hr />
      </div>
  );
}
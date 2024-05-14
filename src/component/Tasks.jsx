import NewTask from "./Newtask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length ===0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any task yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-200">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-700" onClick={()=>{onDeleteTask(task.id)}}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

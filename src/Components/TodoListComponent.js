import { useEffect, useState } from "react";

const TodoListComponent = () => {
  const JsonServer = "http://localhost:3004/todoList";
  const [todolist, setTodolist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    task: "",
    status: false,
  });
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    fetch(JsonServer)
      .then((response) => response.json())
      .then((data) => {
        setTodolist(data);
        if (data.length > 0) {
          const maxId = Math.max(...data.map((todo) => todo.id));
          setNextId(maxId + 1); // Mettre à jour nextId en fonction de l'ID le plus élevé
        }
      })
      .catch((error) => this.error(error));
  }, []);

  const showFormNewTask = () => {
    setShowForm(!showForm);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "status" ? JSON.parse(value) : value,
    });
  };

  const addNewTask = (e) => {
    e.preventDefault();
    const taskToAdd = { ...newTask, id: nextId };
    fetch(JsonServer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskToAdd),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodolist([...todolist, data]);
        setNextId(nextId + 1);
        setNewTask({ task: "", status: false });
        setShowForm(false);
      })
      .catch((error) => console.error("Erreur:", error));
  };

  return (
    <>
      <div>
        <h1>TodoList</h1>
        <table>
          <thead>
            <th itemScope="col">Id</th>
            <th itemScope="col">Tâche</th>
            <th itemScope="col">Statut</th>
          </thead>
          <tbody>
            {todolist.map((todo) => {
              return (
                <tr key={todo.id}>
                  <th itemScope="row">{todo.id}</th>
                  <td>{todo.task}</td>
                  <td>
                    {todo.status ? "Tâche réalisée" : "Tâche non réalisée"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button onClick={showFormNewTask}>
          {showForm ? "Masquer le formulaire" : "Afficher le formulaire"}
        </button>

        {showForm && (
          <form onSubmit={addNewTask}>
            <div>
              <label>
                Tâche:
                <input type="text" name="task" onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Statut:
                <select
                  name="status"
                  value={newTask.status}
                  onChange={handleChange}
                >
                  <option value="false">Pas fait</option>
                  <option value="true">Fait</option>
                </select>
              </label>
            </div>

            <button type="submit">Ajouter une nouvelle tâche</button>
          </form>
        )}
      </div>
    </>
  );
};

export default TodoListComponent;

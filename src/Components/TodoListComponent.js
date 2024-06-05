import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const TodoListComponent = () => {
  const JsonServer = "http://localhost:3004/todoList";
  const [todolist, setTodolist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    task: "",
    status: false,
  });
  const [nextId, setNextId] = useState(1);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    fetch(JsonServer)
      .then((response) => response.json())
      .then((data) => {
        setTodolist(data);
        if (data.length > 0) {
          const maxId = Math.max(...data.map((todo) => todo.id));
          setNextId(maxId + 1);
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

  const deleteTask = (id) => {
    console.log(`Suppression de la tâche avec l'ID : ${id}`);
    fetch(`http://localhost:3004/todoList/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        console.log("Réponse du serveur pour la suppression:", response);
        if (response.ok) {
          console.log("Tâche supprimée avec succès");
          setTodolist(todolist.filter((todo) => todo.id !== id));
        } else {
          console.error("Erreur de suppression:", response.statusText);
        }
      })
      .catch((error) => console.error("Erreur:", error));
  };

  const startEditTask = (task) => {
    setEditTaskId(task.id);
    setNewTask({ task: task.task, status: task.status });
    setShowForm(true);
  };

  const editTask = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3004/todoList/${editTaskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newTask, id: editTaskId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodolist(
          todolist.map((todo) => (todo.id === editTaskId ? data : todo))
        );
        setEditTaskId(null);
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
            <th itemScope="col">Editer</th>
            <th itemScope="col">Supprimer</th>
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
                  <td>
                    <FaRegEdit onClick={() => startEditTask(todo)} />
                  </td>
                  <td>
                    <TiDelete onClick={() => deleteTask(todo.id)} />
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
          <form onSubmit={editTaskId !== null ? editTask : addNewTask}>
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

            <button type="submit">
              {editTaskId !== null
                ? "Éditer la tâche"
                : "Ajouter une nouvelle tâche"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default TodoListComponent;

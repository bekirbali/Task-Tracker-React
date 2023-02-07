import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor",
      date: new Date().getDay(),
      reminder: false,
    },
    {
      id: 2,
      text: "teacher",
      date: new Date().getDay(),
      reminder: false,
    },
    {
      id: 3,
      text: "developer",
      date: new Date().getDay(),
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.round(Math.random() * 1000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        brian={"Task Tracker"}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "nothing to show"
      )}
    </div>
  );
};

// }

export default App;

//? Class based components
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }

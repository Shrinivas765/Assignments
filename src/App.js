import { useState } from "react";
import "./App.css";
import RenderItem from "./Component/RenderItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [marked, setMarked] = useState([]);

  const onChangeTextHandler = (e) => {
    setNewTask(e.target.value);
  };

  const onSubmitHandler = (event) => {
    setTasks([...tasks, newTask]);
    event.preventDefault();
    setNewTask("");
  };

  const onClickHandler = (id) => {
    console.log("pressed", tasks[id]);
    setMarked([...marked, id]);
  };

  const check = (item) => {
    return marked.includes(item);
  };

  const onClearClickHandler = () => {
    console.log("pressed");
    const alteredTasks = tasks.filter((item, index) => {
      return !marked.includes(index);
    });
    console.log("1111", alteredTasks);
    setTasks(alteredTasks);
    setMarked([]);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>ToDo App</h1>
      {tasks.map((item, index) => {
        return (
          <RenderItem
            marked={marked.includes(index)}
            key={index}
            text={item}
            onClick={() => onClickHandler(index)}
          />
        );
      })}

      <div>
        <button onClick={onClearClickHandler}>clear marked</button>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={newTask}
            onChange={(e) => onChangeTextHandler(e)}
          />

          <input
            type="submit"
            value="Submit"
            onClick={(event) => onSubmitHandler(event)}
          />
        </form>
      </div>
    </div>
  );
}

export default App;

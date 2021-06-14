import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, auth, addTodo, remTodo } from "./redux/actions";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    dispatch(addTodo(todo));

    setTodo("");
  };

  return (
    <div className="App">
      <div className="basic">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>{user ? "LOGIN SUCCESSFULL" : "LOGOUT SUCCESSFULL"}</h1>
        <button onClick={() => dispatch(auth())}>
          {user ? "logout" : "login"}
        </button>
      </div>
      <div className="todo">
        <form>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          {todo && (
            <button type="submit" onClick={handleSubmit}>
              ADD
            </button>
          )}
        </form>

        <div className="list">
          {todos.map((t, id) => (
            <div key={id} onClick={() => dispatch(remTodo(id))}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

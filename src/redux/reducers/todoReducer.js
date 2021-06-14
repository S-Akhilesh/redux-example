const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "REM_TODO":
      const todos = [...state];
      todos.splice(action.payload, 1);
      return todos;

    default:
      return state;
  }
};

export default todoReducer;

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const auth = () => {
  return {
    type: "LOGIN",
  };
};

export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload: payload,
  };
};

export const remTodo = (id) => {
  return {
    type: "REM_TODO",
    payload: id,
  };
};

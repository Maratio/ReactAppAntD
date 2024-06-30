const initialState = {
  todos: [],
};

export const addTodoAction = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const todoReducer = (state = initialState, action) => {
  console.log("todoReducer>>>>>>>>>>>>>>>>", state, action);
  switch (action.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};

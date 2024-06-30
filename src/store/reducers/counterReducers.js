

export const MINUS = "MINUS";
export const INCREMENT = "INCREMENT";


// action
// {
//     type: 'Hermitage',
//     payload: data
// }
// {
//     type: 'FoRT',
//     payload: data
// }

const initialState = {
    value: 0,
    isLoading: false,
  };

export const counterReducer = (state = initialState, action) => {
  //dispatch
  console.log(">>>>>>>>>>>>>>>>", state, action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: action.payload };
    //   return state = state.value + action.payload
    case MINUS:
      return { ...state, value: state.value - action.payload };

    case "LOADING":
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
};

// React: 
// Redux 
// Mobx
// Pinia
// Jotai 

// Vue 
// Vuex
// Pinia

// Angular
// RxJs



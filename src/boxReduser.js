// // reducers/boxReducer.js
// const initialState1 = {
//     count: 1,
//     status: 'running',
//   };
  
//   const boxReducer1 = (state1 = initialState1, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state1, count: state1.count + 1 };
//       case 'DECREMENT':
//         return { ...state1, count: state1.count - 1 };
//       case 'TOGGLE_STATUS1':
//         return { ...state1, count: state1.count = 0 };
//       default:
//         return state1;
//     }
//   };

//   const initialState2 = {
//     count: 1,
//     status: 'running',
//   };
//   const boxReducer2 = (state2 = initialState2, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state2, count: state2.count + 1 };
//       case 'DECREMENT':
//         return { ...state2, count: state2.count - 1 };
//       case 'TOGGLE_STATUS1':
//         return { ...state2, count: state2.count = 0 };
//       default:
//         return state2;
//     }
//   };
  
//   export default {boxReducer2,boxReducer1};
  


// reducers/boxReducer.js
const initialState1 = {
    count: 1,
    status: 'running',
  };
  
  const initialState2 = {
    count: 1,
    status: 'running',
  };
  
//   const boxReducer1 = (state1 = initialState1, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state1, count: state1.count + 1 };
//       case 'DECREMENT':
//         return { ...state1, count: state1.count - 1 };
//         case 'TOGGLE_STATUS1':
//             return { ...state1, count: state1.status === 'running' ? 0 : state1.count, status: state1.status === 'running' ? 'stopped' : 'running' };
          
      
//       default:
//         return state1;
//     }
//   };
  
//   const boxReducer2 = (state2 = initialState2, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state2, count: state2.count + 1 };
//       case 'DECREMENT':
//         return { ...state2, count: state2.count - 1 };
   
// case 'TOGGLE_STATUS2':
//     return { ...state2, count: state2, status: state2.status === 'running' ? 'stopped' : 'running' };
//       default:
//         return state2;
//     }
//   };
  
//   export default { boxReducer1, boxReducer2 };
  

// reducers/boxReducer.js

const boxReducer1 = (state1 = initialState1, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state1, count: state1.count + 1 };
      case 'DECREMENT':
        return { ...state1, count: state1.count - 1 };
      case 'TOGGLE_STATUS1':
        return { ...state1, count: state1.status === 'running' ? 0 : state1.count};
      default:
        return state1;
    }
  };
  
  const boxReducer2 = (state2 = initialState2, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state2, count: state2.count + 1 };
      case 'DECREMENT':
        return { ...state2, count: state2.count - 1 };
      case 'TOGGLE_STATUS2':
        return { ...state2, count: state2.status === 'running' ? 0 : state2.count };
      default:
        return state2;
    }
  };
  
  export default { boxReducer1, boxReducer2 };
  
import {combineReducers} from 'redux';

//
import UserReducer from './user/userReducer';
import countReducer from './counter/counterReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  counter: countReducer,
});

export default rootReducer;

// const rootReducer = {
//     user: {
//         uid: "",
//         userName: "",
//         data: []
//     },
//     counter: {
//         count: 0
//     }
// }
// const user = rootReducer.user
// const counter = rootReducer.counter
// console.log(rootReducer.counter.count);

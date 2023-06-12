// redux_store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer

const store = createStore(rootReducer); // Create the Redux store

export default store;

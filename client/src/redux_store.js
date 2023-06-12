import { configureStore } from 'redux';
import rootReducer from './state_mnagement/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

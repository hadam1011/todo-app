// -----Redux core-----
// import { legacy_createStore as createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancer = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancer);

// export default store;

// -----Redux toolkit-----
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/filters/filtersSlice';
import todoSlice from '../components/todo/todoSlice';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoSlice.reducer
    }
})

export default store;
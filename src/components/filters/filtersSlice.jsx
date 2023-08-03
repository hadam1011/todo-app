// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchTodo': {
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         }
//         case 'filters/statusChange': {
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         }
//         case 'filters/priorityChange': {
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         }
//         default: {
//             return state;
//         }
//     }
// }

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search = action.payload;
        },
        statusChange: (state, action) => {
            state.status = action.payload;
        },
        priorityChange: (state, action) => {
            state.priority = action.payload;
        }
    }
})
    
export default filterSlice;
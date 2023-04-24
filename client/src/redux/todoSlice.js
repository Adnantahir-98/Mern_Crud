import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const AddTodo = createAsyncThunk('todo/AddTodo', async(todo) => {
    try {
        const res = await axios.post('http://localhost:5001/api/todo', todo)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})


export const GetTodo = createAsyncThunk('todo/getTodos', async(todo) => {
    try {
        const response = await axios.get('http://localhost:5001/api/todo', todo)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

export const GetSingleTodo = createAsyncThunk('todo/getSingleTodo', async(id) => {
    try {
        const todoResponse = await axios.get(`http://localhost:5001/api/todo/${id}`, id)
        return todoResponse.data;
    } catch (error) {
        console.log(error)
    }
})

export const updateTodo = createAsyncThunk('todo/updateTodo', async(id) => {
    try {
        const updateres = await axios.put(`http://localhost:5001/api/todo/${id}`, id)
        return updateres.data;
    } catch (error) {
        console.log(error)
    }
})


const TodoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos: [],
        loading: false,
        isSuccess: false,
    },
    reducers:{
        reset: (state) => {
            state.loading = false
            state.isSuccess = false
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(AddTodo.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(AddTodo.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.todos.push(action.payload)
            })
            .addCase(AddTodo.rejected, (state) => {
                state.isSuccess = false
            })

            // Get All Todos...
            .addCase(GetTodo.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(GetTodo.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.todos = action.payload
            })
            .addCase(GetTodo.rejected, (state) => {
                state.isSuccess = false
            })

            // Get Single Todo.
            .addCase(GetSingleTodo.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(GetSingleTodo.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.todos = action.payload
            })
            .addCase(GetSingleTodo.rejected, (state) => {
                state.isSuccess = false
            })

            // Update Todo...
            .addCase(updateTodo.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                // state.todos.findIndex(todo => todo.id === action.payload.id)
                state.todos = state.todos.map((item) => item._id === action.payload._id ? action.payload : item)
            })
            .addCase(updateTodo.rejected, (state) => {
                state.isSuccess = false
            })
    }
})


export const {reset} = TodoSlice.actions;
export default TodoSlice.reducer

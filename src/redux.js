import { configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState: 0,
    reducers: {
        increment: (state) => {

            state++
            console.log(state);
            return state
        },
        decrement: (state) => {

            state--
            console.log(state);
            return state
        },
        ajout: (state) => {

            state += Number(document.getElementById('val').value)
            return state
        },
        retire: (state) => {

            state -= Number(document.getElementById('valr').value)
            return state
        }
    }
})

export const { increment, decrement, ajout, retire } = todoSlice.actions;





const todoForm = createSlice({
    name: "form",
    initialState: {
        value: [],
    },
    reducers: {
        enregistrer: (state, action) => {
            state.value.push(action.payload);
            console.log(state);
        }
    },


})

export const { enregistrer } = todoForm.actions;


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        todo2: todoForm.reducer,

    },
})
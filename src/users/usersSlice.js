import { createSlice } from "@reduxjs/toolkit";

initialState = [
    {id: 0, name: 'Bob'},
    {id: 1, name: 'Bill'},
    {id: 2, name: 'Becky'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer
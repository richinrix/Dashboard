import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const initialState = {
    name: "john",
    email: "fakemail",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
    },
});


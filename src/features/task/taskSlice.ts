import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../../app/store";

export type Task = {
    id: number,
    name: string,
    description: string,
    done: boolean
}

const initialState: { arr: Task[], task: Task } = {
    arr: [],
    task: {} as Task
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        getTasks: (state, action) => {
            state.arr = action.payload
        },
        getTaskById: (state, action) => {
            state.task = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log("HYDRATE", state, action.payload);
            return {
                ...state,
                ...action.payload.product,
            };
        },
    }
})


export const selectTask = (st: RootState) => st.task
export const { getTasks, getTaskById } = taskSlice.actions
export default taskSlice.reducer


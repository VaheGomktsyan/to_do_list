import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getTaskById, getTasks } from "./taskApi";
import { ITask } from "../../type/type";


const initialState: { tasks: ITask[]; task: ITask } = {
    tasks: [],
    task: {} as ITask,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        }).addCase(getTaskById.fulfilled, (state, action) => {
            state.task = action.payload;
        })
    },
});

export const selectTask = (st: RootState) => st.task;
export const { } = taskSlice.actions;
export default taskSlice.reducer;

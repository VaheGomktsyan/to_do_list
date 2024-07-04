import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITask } from "../../type/type";

export const getTasks = createAsyncThunk("get tasks", async () => {
    const { data } = await axios.get("http://localhost:3001/tasks");
    return data;
});

export const getTaskById = createAsyncThunk(
    "get taskbyid",
    async (id: number) => {
        const { data } = await axios.get("http://localhost:3001/tasks/" + id);
        return data;
    }
);

export const createTask = createAsyncThunk("create task", 
    async (obj:{ name: string, description:string }) => {
    const { data } = await axios.post("http://localhost:3001/tasks", obj);
    return data;
});

export const updateTaskById = createAsyncThunk(
    "update task",
    async ({id, obj}:{id: number, obj:any}) => {
        const { data } = await axios.patch("http://localhost:3001/tasks/" + id, obj);
        return data;
    }
);

export const updateTaskByDone = createAsyncThunk(
    "update task done",
    async (id: number) => {
        const { data } = await axios.patch("http://localhost:3001/tasks/done/" + id);
        return data;
    }
);

export const deleteTaskById = createAsyncThunk(
    "delete task",
    async (id: number) => {
        const { data } = await axios.delete("http://localhost:3001/tasks/" + id);
        return data;
    }
);
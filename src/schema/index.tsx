import { boolean, InferType, object, string } from "yup";

export const taskSchema = object({
    name: string().min(1).max(10).required(),
    description: string().min(4).max(20).required()
});



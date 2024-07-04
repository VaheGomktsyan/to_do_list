import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ITask } from "../../type/type";
import { createTask } from "../../features/task/taskApi";
import { useForm } from "react-hook-form";
import { taskSchema } from "../../schema";
import { Formik } from "formik";

export const AddTask: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <h3>AddTask</h3>
            <Formik
                initialValues={{ name: "", description: "" }}
                validationSchema={taskSchema}
                onSubmit={(values) => {
                    console.log(values);
                    dispatch(createTask(values)).unwrap().then(console.log);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="description"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description &&
                            touched.description &&
                            errors.description}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

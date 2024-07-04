import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTask } from "../../features/task/taskSlice";
import { useParams } from "react-router-dom";
import { getTaskById, updateTaskById } from "../../features/task/taskApi";
import "./style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const SeeTask: React.FC = () => {
    const { task } = useAppSelector(selectTask);
    const dispatch = useAppDispatch();
    const params = useParams();
    useEffect(() => {
        if (params.id) {
            dispatch(getTaskById(+params.id)).unwrap().then(console.log);
        }
    }, []);
    return (
        <div className="seeTask">
            <h3>More About Task</h3>
            <p>{task.id}</p>
            <p>{task.name}</p>
            <p>{task.description}</p>

            <hr />
            <hr />
            <Formik
                initialValues={{ name: "", description: "" }}
                onSubmit={(values) => {
                    console.log(values);
                    if (params.id)
                        dispatch(
                            updateTaskById({ id: +params.id, obj: values })
                        );
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="name" />
                        <Field name="description" type="description" />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                        <ErrorMessage name="description" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

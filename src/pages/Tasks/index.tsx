import { useEffect } from "react";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteTaskById, getTasks } from "../../features/task/taskApi";
import { selectTask } from "../../features/task/taskSlice";
import { Link } from "react-router-dom";

export const Tasks: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { tasks } = useAppSelector(selectTask);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <div className="containerTask">
            <h3>Tasks</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Done</th>
                        <th>More</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((elm) => (
                        <tr key={elm.id}>
                            <td>{elm.name}</td>
                            <td>{elm.description}</td>
                            <td>{elm.done}</td>
                            <td>
                                <Link to={"/singleTask/" + elm.id}>More</Link>
                            </td>
                            <td>
                                <button
                                    onClick={() =>
                                        dispatch(deleteTaskById(elm.id)).then(
                                            (res) => {
                                                console.log(res);
                                                dispatch(getTasks());
                                            }
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

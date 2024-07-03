import { useEffect } from "react";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTasks } from "../../features/task/taskApi";
import { selectTask } from "../../features/task/taskSlice";

export const Tasks: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { tasks } = useAppSelector(selectTask);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <div className="container">
            <div className="">
                {tasks?.map((elm) => {
                    return (
                        <div key={elm?.id} className="questions__items-item">
                            <div className="quesitons__items-item__info">
                                <div className="item__reviews">
                                    <div>
                                        <p className="p3-fz13">{elm.name}</p>
                                    </div>
                                    <div>
                                        <p>{elm.description}</p>
                                    </div>
                                    <div>
                                        <p>{elm.done}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

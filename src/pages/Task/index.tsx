import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTasks } from "../../features/task/taskApi";
import { selectTask } from "../../features/task/taskSlice";

export const Task: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { task } = useAppSelector(selectTask);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <div className="tasks">
            
        </div>
    );
};

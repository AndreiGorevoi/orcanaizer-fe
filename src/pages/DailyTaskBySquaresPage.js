import { Fragment, useEffect } from "react"
import {getMethod, putMethod} from "../api/CallingServerService"
import DailyTaskTaskCards from "../components/DailyTaskCard"
import styles from "./DailyTaskPage.module.css"
import { connect } from "react-redux";
import { completeTask, deleteTask, loadTaks } from "../redux/actions/TaskActions";

const DailyTaskBySquaresPage = ({ loadTasks, deleteTask, tasks, completeTask }) => {


    useEffect(() => {
        getMethod('task').then(resp => {
            if (!(typeof resp.data === 'string' || resp.data instanceof String)) {
                loadTasks(resp.data)
            }
        })
        //eslint-disable-next-line
    }, [])

    const saveChangesHandle = () => {
        if(window.confirm('Do you want to save?')) {
            putMethod('task/dailies',tasks).then(resp => {
                window.location.reload()
            })
        } else {
            alert('NOOOO')
        }
    }


    return (
        <Fragment>
            <h3>Daily tasks</h3>
            <div className={styles["vertical-line"]} />
            <div className={styles["horizontal-line"]} />

            <div className={styles["first-square"]}>
                {tasks?.filter(oneTask => oneTask.priority === 1).map(taskItem => {
                    return (
                        <DailyTaskTaskCards completeTask={completeTask} deleteTask={deleteTask} key={taskItem.id} taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["second-square"]}>
                {tasks?.filter(oneTask => oneTask.priority === 2).map(taskItem => {
                    return (
                        <DailyTaskTaskCards completeTask={completeTask} deleteTask={deleteTask} key={taskItem.id} taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["third-square"]}>
                {tasks?.filter(oneTask => oneTask.priority === 3).map(taskItem => {
                    return (
                        <DailyTaskTaskCards completeTask={completeTask} deleteTask={deleteTask} key={taskItem.id} taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["fourth-square"]}>
                {tasks?.filter(oneTask => oneTask.priority === 4).map(taskItem => {
                    return (
                        <DailyTaskTaskCards completeTask={completeTask} deleteTask={deleteTask} key={taskItem.id} taskItem={taskItem} />
                    )
                })}
            </div>
            <div className={styles["saveButtonBlock"]}>
                <button onClick={saveChangesHandle}>Save changes</button>
            </div>
        </Fragment>

    )
}

function mapStateToProps(state) {
    return {
        tasks: state.task.tasks
    }
}

export default connect(mapStateToProps, (dispatch) => {
    return {
        loadTasks: tasks => dispatch(loadTaks(tasks)),
        deleteTask: id => dispatch(deleteTask(id)),
        completeTask: id => dispatch(completeTask(id)),
    }
})(DailyTaskBySquaresPage)
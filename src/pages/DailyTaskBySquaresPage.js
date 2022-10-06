import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import styles from "./DailyTaskPage.module.css"

const DailyTaskBySquaresPage = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/task").then(resp => {
            setTasks(resp.data)
        })
    }, [])


    return (
        <Fragment>
            <h3>Daily tasks</h3>
            <div>
                {tasks.map(taskItem => {
                    return <p key={taskItem.id}>{JSON.stringify(taskItem)}</p>
                })}
            </div>
            <div className={styles["vertical-line"]} />
            <div className={styles["horizontal-line"]} />

            <div className={styles["first-square"]}>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
            </div>

            <div className={styles["second-square"]}>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
            </div>

            <div className={styles["third-square"]}>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
            </div>

            <div className={styles["fourth-square"]}>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
                <div>
                    <h2>Task title</h2>
                    <p>Dexc of task</p>
                </div>
            </div>
        </Fragment>

    )
}

export default DailyTaskBySquaresPage
import { Fragment, useEffect, useState } from "react"
import { getMethod } from "../api/CallingServerService"
import DailyTaskTaskCards from "../components/DailyTaskCard"
import styles from "./DailyTaskPage.module.css"

const DailyTaskBySquaresPage = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getMethod('task').then(resp => {
            setTasks(resp.data)
        })
    }, [])


    return (
        <Fragment>
            <h3>Daily tasks</h3>
            <div className={styles["vertical-line"]} />
            <div className={styles["horizontal-line"]} />

            <div className={styles["first-square"]}>
                {tasks.filter(oneTask => oneTask.priority === 1).map(taskItem => {
                    return (
                        <DailyTaskTaskCards taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["second-square"]}>
                {tasks.filter(oneTask => oneTask.priority === 2).map(taskItem => {
                    return (
                        <DailyTaskTaskCards taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["third-square"]}>
                {tasks.filter(oneTask => oneTask.priority === 3).map(taskItem => {
                    return (
                        <DailyTaskTaskCards taskItem={taskItem} />
                    )
                })}
            </div>

            <div className={styles["fourth-square"]}>
                {tasks.filter(oneTask => oneTask.priority === 4).map(taskItem => {
                    return (
                        <DailyTaskTaskCards taskItem={taskItem} />
                    )
                })}
            </div>
        </Fragment>

    )
}

export default DailyTaskBySquaresPage
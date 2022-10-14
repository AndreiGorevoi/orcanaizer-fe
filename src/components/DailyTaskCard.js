import styles from "./DailyTaskCard.module.css"
import { BiCheckbox, BiCheckboxChecked, BiX } from "react-icons/bi"

const DailyTaskTaskCards = ({ taskItem, deleteTask, completeTask }) => {

    const deleteHandle = () => {
        deleteTask(taskItem.id)
    }

    const completeHandle = () => {
        completeTask(taskItem.id)
    }

    return (
        <>
            {taskItem.completed
                ? <div className={taskItem.removed ? styles["taskCardRemoved"] :styles["taskCard"]}>
                    <div className={styles['inlineBlock']}>
                        <h2 style={{ textDecoration: 'line-through' }}>{taskItem.title}</h2>
                        <p style={{ textDecoration: 'line-through' }}>{taskItem.description}</p>
                    </div>
                    <div className={styles['inlineBlock']}>
                        <div>
                            <BiX size='1.7em' onClick={deleteHandle} />
                        </div>
                        <div>
                            {taskItem.completed
                                ? <BiCheckboxChecked size='1.7em' onClick={completeHandle} />
                                : <BiCheckbox size='1.7em' onClick={completeHandle} />}
                        </div>
                    </div>
                </div>
                : <div className={taskItem.removed ? styles["taskCardRemoved"] :styles["taskCard"]}>
                    <div className={styles['inlineBlock']}>
                        <h2>{taskItem.title}</h2>
                        <p>{taskItem.description}</p>
                    </div>
                    <div className={styles['inlineBlock']}>
                        <div>
                            <BiX size='1.7em' onClick={deleteHandle} />
                        </div>
                        <div>
                            {taskItem.completed
                                ? <BiCheckboxChecked size='1.7em' onClick={completeHandle} />
                                : <BiCheckbox size='1.7em' onClick={completeHandle} />}
                        </div>
                    </div>
                </div>}

        </>
    )
}


export default DailyTaskTaskCards
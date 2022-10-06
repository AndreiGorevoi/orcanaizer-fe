import { deleteMethod } from "../api/CallingServerService"
import styles from "./DailyTaskCard.module.css"

const DailyTaskTaskCards = ({ taskItem }) => {
    const deleteHandle = () =>{
        deleteMethod(`task/${taskItem.id}`)
        document.location.reload()
    }


    return (
        <div onClick={deleteHandle} className={styles["taskCard"]}>
            <h2>{taskItem.title}</h2>
            <p>{taskItem.description}</p>
        </div>
    )
}


export default DailyTaskTaskCards
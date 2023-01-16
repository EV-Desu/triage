import Link from "next/link";
import styles from './Tasks.module.css';
const dbHost=process.env.NEXT_DB_HOST;
import CreateNote from './CreateTask';
async function getTasks() {
//     const db = new PocketBase(`${process.env.HOST}');
//     const data = await db.records.getList('tasks');
//or     
    const res = await fetch (`${dbHost}/api/collections/tasks/records?page=1&perPage=30`,
    {cache: 'no-store'}); 
    const data = await res.json();
    return data?.items as any[];
}

export default async function TasksPage(){
    const tasks= await getTasks();
    
return( 
<div>
    <h1> Tasks </h1>
        <div className={styles.grid}>
            {tasks?.map((task)=>{
                return <Task key={task.id} task={task}/>;
            })}
        
        </div>
        <CreateNote />
</div>
        );
    }

function Task({ task }:any){
    const {created, id, start, end, title, description, completed, dependancy } = task || {};

    return(
        <Link href={`/tasks/${id}`}>
            <div className={styles.task}>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}
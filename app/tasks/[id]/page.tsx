import styles from '../Tasks.module.css';

const dbHost=process.env.NEXT_DB_HOST;

async function getTask(taskId: string) {

    const res = await fetch(
        `${dbHost}/api/collections/tasks/records/${taskId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();

    
    return data
}

export default async function TaskPage({ params } : any) {
    const task = await getTask(params.id);

    return(
     <div>
       
        <div className = {styles.task}>
            <p>YEAH</p>
        <h1>tasks/{task.id}</h1> 
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.created}</p>
        </div>
    </div>
    );
}
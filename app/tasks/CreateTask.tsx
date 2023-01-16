'use client';
const dbHost=process.env.NEXT_DB_HOST;
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaskCreate(){

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState('');
    const [dependancy, setDependancy] = useState('');

    
    const router = useRouter();
    const create = async() => {

        await fetch(`${dbHost}/api/collections/tasks/records`,
            {
                method:'POST',
                headers:{
                    //INEGRATE JWT TOKENS PLEASE
                    'Content-Type':'application/json',
                },
                
                body: JSON.stringify({
                    title,
                    description,
                })});

                setDescription('');
                setTitle('');
            
                router.refresh();
            }
        
  
    return(
        <form onSubmit={create}>

            <h3>
                Create a new Task
            </h3>
            <input 
                type="text"
                placeholder='Title'
                value={title} 
                onChange={ (e) => setTitle(e.target.value)}
            />
            <button
                type="submit">
                Submit Note
            </button>
            </form>
    )
}
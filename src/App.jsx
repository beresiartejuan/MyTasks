import './App.css'

import NewTaskForm from './components/NewTaskForm';
import TaskItem from './components/TaskItem';

import {
    Typography,
    Card,
    List
} from "@material-tailwind/react";

import useTasks from './hooks/useTasks';

function App() {

    const { tasks } = useTasks((state) => state);

    return (
        <>
            <div className='text-center py-2'>
                <Typography className='text-gray-900' variant="h1">My Tasks</Typography>
            </div>
            <Card className='bg-gray-100 py-4 px-3'>
                <NewTaskForm />
            </Card>
            <Card className='bg-gray-100 py-4 px-1'>
                <List className="flex flex-col gap-3">
                    {tasks.map((taks) => (
                        <TaskItem key={taks.id} id={taks.id} />
                    ))}
                    {tasks.length == 0 && <Typography as="span" className="inline-block mx-auto">Empty Task List</Typography>}
                </List>
            </Card>
        </>
    );
}

export default App

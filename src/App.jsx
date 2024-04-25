import './App.css'

import NewTaskForm from './components/NewTaskForm';
import TaskItem from './components/TaskItem';

import {
    Typography,
    Card,
    List
} from "@material-tailwind/react";

function App() {
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
                    <TaskItem id={"ikajdoewdo"}></TaskItem>
                    <TaskItem id={"ikaj4345do"}></TaskItem>
                    <TaskItem id={"ikajdafewo"}></TaskItem>
                    <TaskItem id={"ikaytgyjwdo"}></TaskItem>
                    <TaskItem id={"ikajsxsxsxewdo"}></TaskItem>
                </List>
            </Card>
            <footer></footer>
        </>
    );
}

export default App

import { Input, Textarea, Button } from "@material-tailwind/react";
import { AddIcon } from "../Icons";
import useTasks from "../hooks/useTasks";
import { useState } from "react";

export default function NewTaskForm() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { addTask } = useTasks((state) => state);

    const addTaskHanlder = () => {
        if (typeof title != "string" || typeof body != "string") return;

        if (title.trim() == "") return;
        if (title.length <= 3 || title.length > 16) return;

        addTask(title, body);

        setBody("");
        setTitle("");
    }

    return (
        <form className="space-y-2">
            <Input onChange={(e) => { setTitle(e.target.value) }} value={title} type='text' size='lg' required placeholder="Name's taks..." name="Title" label="Title"></Input>
            <Textarea onChange={(e) => { setBody(e.target.value) }} value={body} resize={true} label='Task content...' rows={6}></Textarea>
            <Button onClick={addTaskHanlder} variant="filled" fullWidth size='lg' className="!mt-4 flex justify-center items-center gap-3"><AddIcon />Add Task</Button>
        </form>
    )
}
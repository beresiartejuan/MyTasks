import { Input, Textarea, Button } from "@material-tailwind/react";
import { AddIcon } from "../Icons";

export default function NewTaskForm() {

    return (
        <form className="space-y-2">
            <Input type='text' size='lg' placeholder="Name's taks..." name="Title" label="Title"></Input>
            <Textarea resize={true} label='Task content...' rows={6}></Textarea>
            <Button variant="filled" fullWidth size='lg' className="!mt-4 flex justify-center items-center gap-3"><AddIcon />Add Task</Button>
        </form>
    )
}
import { ListItem, ListItemSuffix, Collapse, IconButton, Card, Typography } from "@material-tailwind/react";
import { MoreIcon, CheckIcon, TrashIcon } from "../Icons";
import { useState } from "react";
import useTasks from "../hooks/useTasks";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TaskItem({ id }) {

    const { get, update, destroy } = useTasks((state) => state);

    const [task, setTask] = useState(get(id) ?? {
        title: "[Deleted task]",
        body: ""
    });

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(task.checked);

    const trashHanlder = () => {
        destroy(task.id);
    }

    const toggleOpen = () => {
        setOpen(!open)
    }

    const toggleChecked = () => {
        update(task.id, {
            ...task,
            checked: !task.checked
        }, (new_task) => {
            setTask(new_task);
            setChecked(new_task.checked)
        })

    }

    return (
        <>
            <ListItem ripple={false} className={`py-1 pr-1 pl-4 bg-white ${checked ? "bg-green-300 hover:!bg-green-300" : ""}`}>
                <Typography as="h4" className="font-semibold">{task.title}</Typography>
                <ListItemSuffix className="flex flex-row flex-wrap gap-1">
                    <IconButton onClick={toggleOpen} variant="text" color="blue-gray">
                        <MoreIcon />
                    </IconButton>
                    <IconButton onClick={toggleChecked} variant="text" color="blue-gray">
                        <CheckIcon />
                    </IconButton>
                    <IconButton onClick={trashHanlder} variant="text" color="blue-gray">
                        <TrashIcon />
                    </IconButton>
                </ListItemSuffix>
            </ListItem>
            <Collapse open={open} className={open ? "inline-block" : "!hidden"}>
                <Card className="px-4 py-4 text-sm">
                    <Markdown remarkPlugins={[remarkGfm]}>{task.body}</Markdown>
                </Card>
            </Collapse>
        </>
    )
}
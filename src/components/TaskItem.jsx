import { ListItem, ListItemSuffix, Collapse, IconButton, Card, Typography } from "@material-tailwind/react";
import { MoreIcon, CheckIcon, TrashIcon } from "../Icons";
import { useState } from "react";

export default function TaskItem({ id }) {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }

    const toggleChecked = () => {
        setChecked(!checked);
    }

    return (
        <>
            <ListItem ripple={false} className={`py-1 pr-1 pl-4 bg-white ${checked ? "bg-green-300 hover:!bg-green-300" : ""}`}>
                <Typography as="h4" className="font-semibold">Item {id}</Typography>
                <ListItemSuffix className="flex flex-row flex-wrap gap-1">
                    <IconButton onClick={toggleOpen} variant="text" color="blue-gray">
                        <MoreIcon />
                    </IconButton>
                    <IconButton onClick={toggleChecked} variant="text" color="blue-gray">
                        <CheckIcon />
                    </IconButton>
                    <IconButton variant="text" color="blue-gray">
                        <TrashIcon />
                    </IconButton>
                </ListItemSuffix>
            </ListItem>
            <Collapse open={open} className={open ? "inline-block" : "!hidden"}>
                <Card className="px-4 py-4 text-sm">
                    sLorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, tempora, iure laboriosam rem molestiae officia dolor quis explicabo, exercitationem temporibus commodi accusantium voluptatem necessitatibus? Veritatis excepturi rerum quidem ipsa a?
                </Card>
            </Collapse>
        </>
    )
}
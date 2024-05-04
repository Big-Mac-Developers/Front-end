import { SubTask } from "@/model/task";
import { Section } from "@/model/board";

const mockData: Section[] = [
    {
        id: "todo",
        title: " 📃 To do",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Learn JavaScript",
                assignee: "",
                description: "",
                status: "todo",
                main_task_id: ""
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Git",
                assignee: "",
                description: "",
                status: "todo",
                main_task_id: ""
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Python",
                assignee: "",
                description: "",
                status: "todo",
                main_task_id: ""
            },
        ],
    },
    {
        id: "in-progress",
        title: " ✏️ In progress",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Learn CSS",
                assignee: "",
                description: "",
                status: "in-progress",
                main_task_id: ""
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Golang",
                assignee: "",
                description: "",
                status: "in-progress",
                main_task_id: ""
            },
        ],
    },
    {
        id: "done",
        title: " ✔️ Completed",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Learn HTML",
                assignee: "",
                description: "",
                status: "done",
                main_task_id: ""
            },
        ],
    },
];

export default mockData;

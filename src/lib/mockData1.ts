import { Section } from "@/model/board";

const mockData: Section[] = [
	{
		id: "todo",
		title: " 📃 To do",
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Learn JavaScript",
				// assignee: "Someone 1",
				description:
					"I want to learn JavaScript to build web applications. This is a long description to test the layout of the card. I want to learn JavaScript to build web applications. This is a long description to test the layout of the card. I want to learn JavaScript to build web applications. This is a long description to test the layout of the card.",
				status: "todo",
				main_task_id: "",
				due_date: new Date("2024-05-20"),
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Git",
				description: "",
				status: "todo",
				main_task_id: "",
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Python",
				// assignee: "",
				description: "",
				status: "todo",
				main_task_id: "",
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
				// assignee: "",
				description: "",
				status: "in-progress",
				main_task_id: "",
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Golang",
				// assignee: "",
				description: "",
				status: "in-progress",
				main_task_id: "",
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
				// assignee: "",
				description: "",
				status: "done",
				main_task_id: "",
			},
		],
	},
];

export default mockData;

import { MainTask } from "./types.tsx"; // Assuming your interfaces are in a file called 'interfaces.ts'

const mainTasks: MainTask[] = [
	{
		id: 1,
		title: "Complete project proposal",
		description: "Write and finalize project proposal document",
		due_date: new Date("2024-05-15"),
		status: "IN_PROGRESS",
		subtasks: [
			{
				id: "1",
				title: "Research",
				description: "Gather information for proposal",
				status: "IN_PROGRESS",
				assignee: "John Doe",
				assigned_date: new Date("2024-05-01"),
				completed_date: new Date("2024-05-02"), // Assuming this subtask is still in progress
			},
			{
				id: "2",
				title: "Write draft",
				description: "Draft proposal document",
				status: "TODO",
				assignee: "Jane Smith",
				assigned_date: new Date("2024-05-03"),
				completed_date: new Date("2024-05-10"),
			},
		],
	},
	{
		id: 2,
		title: "Prepare presentation slides",
		description: "Create slides for project presentation",
		due_date: new Date("2024-05-20"),
		status: "TODO",
		subtasks: [
			{
				id: "3",
				title: "Outline content",
				description: "Outline the content for slides",
				status: "DONE",
				assignee: "Emily Johnson",
				assigned_date: new Date("2024-04-28"),
				completed_date: new Date("2024-04-29"),
			},
			{
				id: "4",
				title: "Design slides",
				description: "Design slides based on outline",
				status: "IN_PROGRESS",
				assignee: "Michael Brown",
				assigned_date: new Date("2024-05-02"),
				completed_date: new Date("2024-05-20"),
			},
		],
	},
	{
		id: 3,
		title: "Some new assignment name",
		description: "Lorem ipsum blah blah",
		due_date: new Date("2024-05-20"),
		status: "TODO",
		subtasks: [
			{
				id: "3",
				title: "Outline dfsdsfsd",
				description: "Outline the content for slides",
				status: "DONE",
				assignee: "Emily Johnson",
				assigned_date: new Date("2024-04-28"),
				completed_date: new Date("2024-04-29"),
			},
			{
				id: "4",
				title: "Desigfdsfdsn slides",
				description: "Design slides based on outline",
				status: "IN_PROGRESS",
				assignee: "Michael Brown",
				assigned_date: new Date("2024-05-02"),
				completed_date: new Date("2024-05-20"),
			},
		],
	},
	{
		id: 3,
		title: "Some new assignment name",
		description: "Lorem ipsum blah blah",
		due_date: new Date("2024-05-20"),
		status: "TODO",
		subtasks: [
			{
				id: "3",
				title: "Outline dfsdsfsd",
				description: "Outline the content for slides",
				status: "DONE",
				assignee: "Emily Johnson",
				assigned_date: new Date("2024-04-28"),
				completed_date: new Date("2024-04-29"),
			},
			{
				id: "4",
				title: "Desigfdsfdsn slides",
				description: "Design slides based on outline",
				status: "IN_PROGRESS",
				assignee: "Michael Brown",
				assigned_date: new Date("2024-05-02"),
				completed_date: new Date("2024-05-20"),
			},
		],
	},
	{
		id: 3,
		title: "Some new assignment name",
		description: "Lorem ipsum blah blah",
		due_date: new Date("2024-05-20"),
		status: "TODO",
		subtasks: [
			{
				id: "3",
				title: "Outline dfsdsfsd",
				description: "Outline the content for slides",
				status: "DONE",
				assignee: "Emily Johnson",
				assigned_date: new Date("2024-04-28"),
				completed_date: new Date("2024-04-29"),
			},
			{
				id: "4",
				title: "Desigfdsfdsn slides",
				description: "Design slides based on outline",
				status: "IN_PROGRESS",
				assignee: "Michael Brown",
				assigned_date: new Date("2024-05-02"),
				completed_date: new Date("2024-05-20"),
			},
		],
	},
	{
		id: 3,
		title: "Some new assignment name",
		description: "Lorem ipsum blah blah",
		due_date: new Date("2024-05-20"),
		status: "TODO",
		subtasks: [
			{
				id: "3",
				title: "Outline dfsdsfsd",
				description: "Outline the content for slides",
				status: "DONE",
				assignee: "Emily Johnson",
				assigned_date: new Date("2024-04-28"),
				completed_date: new Date("2024-04-29"),
			},
			{
				id: "4",
				title: "Desigfdsfdsn slides",
				description: "Design slides based on outline",
				status: "IN_PROGRESS",
				assignee: "Michael Brown",
				assigned_date: new Date("2024-05-02"),
				completed_date: new Date("2024-05-20"),
			},
		],
	},
];

export default mainTasks;

import { Board } from "@/model/board";
import { mockMembers } from "./mockUsers";

export const mockBoard: Board = {
	board_id: 1,
	title: "Board 1",
	moderator_id: "1",
	members: mockMembers,
	tasks: [
		{
			id: "1",
			title: "Task 1",
			description: "Description 1",
			due_date: new Date("2025-12-31"),
			status: "todo",
			board_id: 1,
			subtasks: [
				{
					id: "1",
					title: "Subtask 1",
					description: "Subtask Description 1",
					due_date: new Date("2023-12-31"),
					status: "in-progress",
					assignee: "1",
					main_task_id: "1",
				},
				{
					id: "2",
					title: "Subtask 2",
					description: "Subtask Description 2",
					due_date: new Date("2025-12-31"),
					status: "todo",
					assignee: "1",
					main_task_id: "1",
				},
				{
					id: "3",
					title: "Subtask 2",
					description: "Subtask Description 2",
					due_date: new Date("2023-12-31"),
					status: "done",
					assignee: "1",
					main_task_id: "1",
				},
				{
					id: "4",
					title: "Subtask 2",
					description: "Subtask Description 2",
					due_date: new Date("2025-12-31"),
					status: "done",
					assignee: "1",
					main_task_id: "1",
				},
				{
					id: "5",
					title: "Subtask 2",
					description: "Subtask Description 2",
					due_date: new Date("2025-12-31"),
					status: "todo",
					assignee: "1",
					main_task_id: "1",
				},
			],
		},
	],
};

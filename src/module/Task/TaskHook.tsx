import { SubTask } from "@/model/task";
import { User } from "@/model/user";
import { updateSubTask } from "./Service";
import { toast } from "react-toastify";

export function useTask({
	subtask,
	members,
	handleTaskChange,
}: {
	subtask: SubTask;
	members: User[];
	handleTaskChange: (modifiedTask: SubTask) => void;
}) {
	const setDueDate = async (date: Date | undefined) => {
		const updatedTask = { ...subtask, due_date: date };
		const req = updateSubTask(subtask.id, updatedTask.status);
		const res = await toast.promise(req, {
			pending: "Updating due date...",
			success: "Due date updated!",
			error: "Failed to update due date. please try again.",
		});

		if (res.ok) {
			handleTaskChange(updatedTask);
		}
	};

	const setAssignee = async (id: string) => {
		console.log(subtask);
		if (members.some((member) => member.id === id)) {
			const assignee = members.find((member) => member.id === id);
			const updatedTask = { ...subtask, assignee };
			handleTaskChange(updatedTask);
			console.log(updatedTask);

			//   const req = updateSubTask(task.id, updatedTask.status);
			//   const res = await toast.promise(req, {
			//     pending: "Updating assignee...",
			//     success: "Assignee updated!",
			//     error: "Failed to update assignee. please try again.",
			//   });
			//   if (res.ok) {
			//     setTask(updatedTask);
			//   }
		}
	};

	const setStatus = async (status: "todo" | "in-progress" | "done") => {
		const updatedTask = {
			...subtask,
			status: status,
			compled_date: status === "done" ? new Date() : undefined,
			assigned_date: status === "in-progress" ? new Date() : undefined,
		};
		const req = updateSubTask(subtask.id, updatedTask.status);
		const res = await toast.promise(req, {
			pending: "Updating status to " + status + "...",
			success: "Status updated to " + status + " !",
			error: "Failed to update status. please try again.",
		});
		if (res.ok) {
			handleTaskChange(updatedTask);
		}
	};

	return { task: subtask, setStatus, setAssignee, setDueDate };
}

import { useState, useMemo, useEffect } from "react";
import { Board } from "@/model/board";
import { MainTask, SubTask, SubTaskInitial } from "@/model/task";

type MainTaskAction = "create" | "update";

export function useBoard({ board }: { board: Board }) {
	//need to get subtask from main task
	// need to separate into different sections for kanban board

	const [mainTasks, setMainTasks] = useState<MainTask[]>(board.tasks);
	const subtasks = useMemo(
		() =>
			mainTasks.flatMap((task) => {
				return task.subtasks;
			}),

		[mainTasks]
	);

	const [todoTasks, setTodoTasks] = useState<SubTask[]>(
		subtasks.filter((task) => task.status === "todo")
	);

	const [inProgressTasks, setInProgressTasks] = useState<SubTask[]>(
		subtasks.filter((task) => task.status === "in-progress")
	);

	const [doneTasks, setDoneTasks] = useState<SubTask[]>(
		subtasks.filter((task) => task.status === "done")
	);

	useEffect(() => {
		const subtasks = mainTasks.flatMap((task) => {
			return task.subtasks;
		});
		setTodoTasks(subtasks.filter((task) => task.status === "todo"));
		setInProgressTasks(
			subtasks.filter((task) => task.status === "in-progress")
		);
		setDoneTasks(subtasks.filter((task) => task.status === "done"));
	}, [mainTasks]);
	//   const todoTasks
	const setSubtasks = (action: MainTaskAction) => (subtask: SubTask) => {
		console.log(subtask);
		console.log(mainTasks);
		const taskIndex = mainTasks.findIndex(
			(mainTask) => mainTask.id === subtask.main_task_id
		);

		if (taskIndex === -1) {
			console.error("Main task not found");
			return;
		}

		const updatedMainTasks = [...mainTasks];
		const updatedSubtasks = [...updatedMainTasks[taskIndex].subtasks];

		if (action === "create") {
			updatedSubtasks.push(subtask);
		} else {
			const subtaskIndex = updatedSubtasks.findIndex(
				(st) => st.id === subtask.id
			);
			if (subtaskIndex !== -1) {
				updatedSubtasks[subtaskIndex] = subtask;
			} else {
				console.error("Subtask to replace not found");
				return;
			}
		}
		updatedMainTasks[taskIndex].subtasks = updatedSubtasks;
		console.log(updatedMainTasks);
		setMainTasks(updatedMainTasks);
	};
	const handleTaskChange = (modifiedTask: SubTask) => {
		if (modifiedTask.status === "todo") {
			setTodoTasks((prev) =>
				prev.map((task) =>
					task.id === modifiedTask.id ? modifiedTask : task
				)
			);
		} else if (modifiedTask.status === "in-progress") {
			setInProgressTasks((prev) =>
				prev.map((task) =>
					task.id === modifiedTask.id ? modifiedTask : task
				)
			);
		} else {
			setDoneTasks((prev) =>
				prev.map((task) =>
					task.id === modifiedTask.id ? modifiedTask : task
				)
			);
		}
		setSubtasks("update")(modifiedTask);
	};

	// const deleteTask = (task: SubTask) => {
	// 	if (task.status === "todo") {
	// 		setTodoTasks((prev) => prev.filter((t) => t.id !== task.id));
	// 	} else if (task.status === "in-progress") {
	// 		setInProgressTasks((prev) => prev.filter((t) => t.id !== task.id));
	// 	} else {
	// 		setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
	// 	}
	// };

	const createSubTask = async (task: SubTaskInitial) => {
		// const req = createSubTaskService(task);
		// const res = await toast.promise(req, {
		//   pending: "Creating task...",
		//   success: "Task created!",
		//   error: "Failed to create task. please try again.",
		// });
		// if (res.ok) {
		//   const task = res.data as SubTask;
		//   setSubtasks("create")(task);
		setSubtasks("create")({ ...task, id: "123d3" });
		// }
	};

	return {
		todoTasks,
		inProgressTasks,
		doneTasks,
		handleTaskChange,
		createSubTask,
	};
}

import KanbanBoard from "@/components/KanbanBoard";

import { NewTaskDialog } from "@/components/NewTaskDialog";
import { Button } from "@/components/ui/button";
import { Assignment, MainTask } from "@/lib/types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBoard } from "@/module/board/BoardHook";
// import { mockBoard } from "@/lib/mockBoard";
import { Progress } from "@/components/ui/progress";

export default function KanbanPage() {
	const { id } = useParams();

	// const {
	// 	todoTasks,
	// 	inProgressTasks,
	// 	doneTasks,
	// 	handleTaskChange,
	// 	createSubTask,
	// } = useBoard({
	// 	board: mockBoard,
	// });

	// useEffect(() => {
	// 	// @ts-ignore
	// 	const assignment: Assignment = newDummyData.find((unit) => unit.id === id);
	// 	setAssignments(unit.assignments);
	// }, []);

	return (
		// <div className="flex flex-col gap-4">
		// 	<div className="flex flex-col gap-8 md:gap-12">
		// 		<div className="flex items-center justify-between">
		// 			<div className="flex gap-8">
		// 				<h1 className="md:text-4xl text-2xl font-bold">
		// 					{"✨ Assignment " + id}
		// 				</h1>
		// 				<Progress value={66} className="w-[60%] mt-2" />
		// 				<NewTaskDialog
		// 					createSubTaskFunc={createSubTask}
		// 					MainTasks={mockBoard.tasks}
		// 				/>
		// 			</div>
		// 		</div>
		// 		<KanbanBoard
		// 			todoTasks={todoTasks}
		// 			handleTaskChange={handleTaskChange}
		// 			inProgressTasks={inProgressTasks}
		// 			doneTasks={doneTasks}
		// 		/>
		// 	</div>
		// </div>
		<p>Hello</p>
	);
}

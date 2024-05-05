import KanbanBoard from "@/components/KanbanBoard";

import { NewTaskDialog } from "@/components/NewTaskDialog";
import { useParams } from "react-router-dom";
import { useBoard } from "@/module/board/BoardHook";
import { mockBoard } from "@/lib/mockBoard";
import { Progress } from "@/components/ui/progress";

export default function KanbanPage() {
	const { id } = useParams();

	const {
		todoTasks,
		inProgressTasks,
		doneTasks,
		handleTaskChange,
		createSubTask,
	} = useBoard({
		board: mockBoard,
	});

	const points =
		(doneTasks.length /
			(todoTasks.length + inProgressTasks.length + doneTasks.length)) *
		100;

	return (
		<div className="flex flex-col gap-4 lg:mx-[20%] mx-4 mt-10 md:mt-24">
			<div className="flex flex-col gap-8 md:gap-12">
				<div className="flex items-center justify-between gap-4">
					<div className="flex gap-8 items-center">
						<h1 className="md:text-4xl text-2xl font-bold text-nowrap">
							{"✨ Assignment " + id}
						</h1>
						<NewTaskDialog
							createSubTaskFunc={createSubTask}
							MainTasks={mockBoard.tasks}
						/>
					</div>
					<div className="flex justify-center gap-2 text-lg border rounded-lg p-2 items-center">
						<p className="text-nowrap">
							🟢 Your Experience Points:
						</p>
						<p className="font-semibold">{points}</p>
						<Progress
							value={points}
							className="md:w-[7rem] lg:w-[15rem] md:flex hidden "
						/>
					</div>
				</div>
				<KanbanBoard
					todoTasks={todoTasks}
					handleTaskChange={handleTaskChange}
					inProgressTasks={inProgressTasks}
					doneTasks={doneTasks}
				/>
			</div>
		</div>
	);
}

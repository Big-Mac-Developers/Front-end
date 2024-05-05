import KanbanBoard from "@/components/KanbanBoard";

import { NewTaskDialog } from "@/components/NewTaskDialog";
import { useParams } from "react-router-dom";
import { useBoard } from "@/module/board/BoardHook";
import { mockBoard } from "@/lib/mockBoard";

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

	return (
		<div className="flex flex-col gap-4 md:mx-[20%] mx-4">
			<div className="flex flex-col gap-8 md:gap-12">
				<div className="flex items-center justify-between">
					<div className="flex gap-8">
						<h1 className="md:text-4xl text-2xl font-bold">
							{"✨ Assignment " + id}
						</h1>
						<NewTaskDialog
							createSubTaskFunc={createSubTask}
							MainTasks={mockBoard.tasks}
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

import KanbanBoard from "@/components/KanbanBoard";
import { NewTaskDialog } from "@/components/NewTaskDialog";
import { Progress } from "@/components/ui/progress";
import { MainTask } from "@/lib/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function KanbanPage() {
	const { id } = useParams();
	const [mainTasks, setMainTasks] = useState<MainTask[]>([]);

	// useEffect(() => {
	// 	// @ts-ignore
	// 	const assignment: Assignment = newDummyData.find((unit) => unit.id === id);
	// 	setAssignments(unit.assignments);
	// }, []);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-8 md:gap-12">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-8">
						<h1 className="md:text-4xl text-2xl font-bold">
							{"✨ Assignment " + id}
						</h1>
						<NewTaskDialog />
					</div>
					<Progress className="w-[20%]" value={33} />
					<Progress className="w-[20%]" value={33} />
					<Progress className="w-[20%]" value={33} />
				</div>
				<KanbanBoard />
			</div>
		</div>
	);
}

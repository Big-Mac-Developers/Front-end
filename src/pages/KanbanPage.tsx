import KanbanBoard from "@/components/KanbanBoard";
import { NewTaskDialog } from "@/components/NewTaskDialog";
import { Button } from "@/components/ui/button";
import { Assignment, MainTask } from "@/lib/types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
					<div className="flex gap-8">
						<h1 className="md:text-4xl text-2xl font-bold">
							{"✨ Assignment " + id}
						</h1>
						<NewTaskDialog />
					</div>
				</div>
				<KanbanBoard />
			</div>
			<div className="flex justify-center">
				<Button asChild>
					<Link to={"/leaderboard/" + id}>See the leaderboard</Link>
				</Button>
			</div>
		</div>
	);
}

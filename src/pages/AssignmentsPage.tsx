import { useEffect, useState } from "react";
import { MainTask } from "../lib/types";
import mockDataMainTasks from "../lib/mockDataMainTasks.ts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { NewAssignmentDialog } from "@/components/NewAssignmentDialog.tsx";

export default function AssignmentsPage() {
	const [mainTasks, setMainTasks] = useState<MainTask[]>([]);

	useEffect(() => {
		setMainTasks(mockDataMainTasks);
	}, []);

	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex gap-8">
				<h1 className="md:text-4xl text-2xl font-bold">
					📝 Your Assignments
				</h1>
				<NewAssignmentDialog />
			</div>
			<div className="grid grid-cols-3 gap-4">
				{mainTasks.map((task) => (
					<Link to={"/kanban/" + task.id.toString()}>
						<Card className="dark:hover:brightness-110 hover:brightness-[97%] p-4 dark:bg-neutral-900 bg-neutral-100">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-lg">
									{task.title}
								</CardTitle>
								<CardDescription>
									{task.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="p-0 opacity-80">
								<p className="text-sm">
									<span className="font-semibold">
										Due date:{" "}
									</span>
									{task.due_date.toDateString()}
								</p>
								<div className="text-sm">
									<span className="font-semibold">
										Status:{" "}
									</span>{" "}
									{task.status}
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}

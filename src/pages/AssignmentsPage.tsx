import { useEffect, useState } from "react";
import { Assignment, Unit } from "../lib/types";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Link, useParams } from "react-router-dom";
import { NewAssignmentDialog } from "@/components/NewAssignmentDialog.tsx";
import newDummyData from "../lib/newDummyData.json";
import { Button } from "@/components/ui/button";

export default function AssignmentsPage() {
	const { id } = useParams();
	const [assignments, setAssignments] = useState<Assignment[]>([]);
	const [unit, setUnit] = useState<Unit>();
	useEffect(() => {
		// @ts-ignore
		const unit: Unit = newDummyData.find((unit) => unit.id === id);
		setUnit(unit);
		setAssignments(unit.assignments);
	}, []);

	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex gap-8">
				{unit && (
					<h1 className="md:text-4xl text-2xl font-bold">
						{"📝 " + unit.title}
					</h1>
				)}
				<NewAssignmentDialog />
			</div>
			<div className="grid grid-cols-3 gap-4">
				{assignments.map((assignment) => (
					<Link to={"/kanban/" + assignment.id} key={assignment.id}>
						<Card className="dark:hover:brightness-110 hover:brightness-[97%] p-4 dark:bg-neutral-900 bg-neutral-100">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-lg">
									{assignment.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 opacity-80">
								<div className="text-sm">
									<span className="font-semibold">
										Status:{" "}
									</span>{" "}
									{assignment.active ? "Active" : "Inactive"}
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
			<div className="flex justify-center">
				<Button asChild>
					<Link to={"/leaderboard/" + id}>See the leaderboard</Link>
				</Button>
			</div>
		</div>
	);
}

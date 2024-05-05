import { useEffect, useState } from "react";
import { Unit } from "../lib/types";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { NewAssignmentDialog } from "@/components/NewAssignmentDialog.tsx";
import newDummyData from "../lib/newDummyData.json";
import { Button } from "@/components/ui/button";

export default function UnitsPage() {
	const [units, setUnits] = useState<Unit[]>([]);

	useEffect(() => {
		// @ts-ignore
		setUnits(newDummyData);
	}, []);

	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex items-center justify-between">
				<div className="flex gap-8">
					<h1 className="md:text-4xl text-2xl font-bold">
						🗡️ Your Quests
					</h1>
					<NewAssignmentDialog />
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{/* Show all units */}
				{units.map((unit) => (
					<Card
						className="p-4 dark:bg-neutral-900 bg-neutral-100"
						key={unit.id}
					>
						<CardHeader className="p-0 mb-4">
							<div className="flex justify-between items-center">
								<CardTitle className="text-lg">
									{unit.title}
								</CardTitle>
								<NewAssignmentDialog />
							</div>
						</CardHeader>

						<CardContent className="p-0 gap-4 flex flex-col">
							{/* Show assignments for each unit*/}
							{unit.assignments.map((assignment) => (
								<Link
									to={"/kanban/" + assignment.id}
									key={assignment.id}
								>
									<Card className="dark:hover:brightness-125 hover:brightness-[97%]">
										<CardHeader>
											<CardTitle className="text-lg opacity-90">
												{assignment.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="text-sm opacity-70">
												<span className="font-semibold">
													Status:{" "}
												</span>{" "}
												{assignment.active
													? "Active"
													: "Inactive"}
											</div>
										</CardContent>
									</Card>
								</Link>
							))}

							<Button asChild>
								<Link to={"/assignments/" + unit.id}>
									Leaderboard
								</Link>
							</Button>
							<div className="flex justify-center gap-1">
								<span className="font-semibold">
									🟢 Your XP:
								</span>
								<p>{"100"}</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

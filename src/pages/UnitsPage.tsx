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
import { Progress } from "@/components/ui/progress";

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
						📖 Your Units
					</h1>
					<NewAssignmentDialog />
				</div>
				<Progress value={66} className="w-[60%] mt-2" />
			</div>
			<div className="grid grid-cols-3 gap-4">
				{units.map((unit) => (
					<Link to={"/assignments/" + unit.id} key={unit.id}>
						<Card className="dark:hover:brightness-110 hover:brightness-[97%] p-4 dark:bg-neutral-900 bg-neutral-100">
							<CardHeader className="p-0 mb-4">
								<CardTitle className="text-lg">
									{unit.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0 opacity-80">
								<div className="text-sm">
									<span className="font-semibold">
										Status:{" "}
									</span>{" "}
									{unit.active ? "Active" : "Inactive"}
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}

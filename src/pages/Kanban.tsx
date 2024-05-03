import KanbanCard from "@/components/KanbanCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Kanban() {
	return (
		<div className="flex justify-center mx-[12.5%] m-4 mt-14">
			<div className="flex flex-col justify-between w-full">
				{/* Headers */}
				<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3 my-4">
					<div className="flex justify-between">
						<h2 className="text-2xl font-semibold">Todo</h2>
						<Button
							size="icon"
							variant="outline"
							className="h-8 w-8"
						>
							<PlusIcon size={18} />
						</Button>
					</div>
					<div className="flex justify-between">
						<h2 className="text-2xl font-semibold">In Progress</h2>
						<Button
							size="icon"
							variant="outline"
							className="h-8 w-8"
						>
							<PlusIcon size={18} />
						</Button>
					</div>
					<div className="flex justify-between">
						<h2 className="text-2xl font-semibold">Done</h2>
						<Button
							size="icon"
							variant="outline"
							className="h-8 w-8"
						>
							<PlusIcon size={18} />
						</Button>
					</div>
				</div>

				{/* Main */}
				<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3">
					<KanbanCard />
					<KanbanCard />
					<KanbanCard />
					<KanbanCard />
					<KanbanCard />
					<KanbanCard />
				</div>
			</div>
		</div>
	);
}

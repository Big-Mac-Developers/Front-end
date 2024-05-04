import KanbanBoard from "@/components/KanbanBoard";
import { NewTaskDialog } from "@/components/NewTaskDialog";
import { Progress } from "@/components/ui/progress";
import { useParams } from "react-router-dom";

export default function KanbanPage() {
	// get the board id via the url
	const { id } = useParams();

	// get data using react query and pass to kanban board

	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex items-center justify-between">
				<div className="flex gap-8">
					<h1 className="md:text-4xl text-2xl font-bold">
						{"✨ Assignment " + id}
					</h1>
					<NewTaskDialog />
				</div>
				<Progress value={66} className="w-[60%] mt-2" />
			</div>

			<KanbanBoard />
		</div>
	);
}

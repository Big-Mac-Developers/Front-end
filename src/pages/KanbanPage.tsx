import KanbanBoard from "@/components/KanbanBoard";
import { NewTaskDialog } from "@/components/NewTaskDialog";
import { useParams } from "react-router-dom";

export default function KanbanPage() {
	const { id } = useParams();
	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex gap-8 items-center">
				<h1 className="md:text-4xl text-2xl font-bold">
					{"✨ Assignment " + id}
				</h1>
				<NewTaskDialog />
			</div>

			<KanbanBoard />
		</div>
	);
}

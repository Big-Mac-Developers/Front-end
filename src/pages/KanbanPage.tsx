import KanbanBoard from "@/components/KanbanBoard";
import { NewTaskDialog } from "@/components/NewTaskDialog";

interface KanbanPageProps {
	title: String;
}

export default function KanbanPage({ title }: KanbanPageProps) {
	return (
		<div className="flex flex-col gap-8 md:gap-12">
			<div className="flex gap-8 items-center">
				<h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
				<NewTaskDialog />
			</div>

			<KanbanBoard />
		</div>
	);
}

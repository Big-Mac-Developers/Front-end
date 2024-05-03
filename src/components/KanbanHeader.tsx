import { NewTaskDialog } from "./NewTaskDialog";

interface KanbanHeaderProps {
	title: string;
}

export default function KanbanHeader({ title }: KanbanHeaderProps) {
	return (
		<div className="flex justify-between">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<NewTaskDialog />
		</div>
	);
}

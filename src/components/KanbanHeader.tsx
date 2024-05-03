import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

interface KanbanHeaderProps {
	title: string;
}

export default function KanbanHeader({ title }: KanbanHeaderProps) {
	return (
		<div className="flex justify-between mb-4">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<Button size="icon" variant="outline" className="h-8 w-8">
				<PlusIcon size={18} />
			</Button>
		</div>
	);
}

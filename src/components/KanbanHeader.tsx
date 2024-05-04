interface KanbanHeaderProps {
	title: string;
}

export default function KanbanHeader({ title }: KanbanHeaderProps) {
	return (
		<div className="flex justify-between">
			<div className="flex items-center gap-4">
				<h2 className="text-xl font-semibold">{title}</h2>
			</div>
		</div>
	);
}

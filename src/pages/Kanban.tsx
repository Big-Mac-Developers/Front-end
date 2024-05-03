import KanbanCard from "@/components/KanbanCard";
import KanbanHeader from "@/components/KanbanHeader";

export default function Kanban() {
	return (
		<div className="flex justify-center mx-[12.5%] m-4 mt-14">
			<div className="flex flex-col justify-between w-full">
				<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3">
					<div>
						<KanbanHeader title="Todo" />
						<KanbanCard />
					</div>

					<div>
						<KanbanHeader title="In Progress" />
						<KanbanCard />
					</div>

					<div>
						<KanbanHeader title="Done" />
						<KanbanCard />
					</div>
				</div>
			</div>
		</div>
	);
}

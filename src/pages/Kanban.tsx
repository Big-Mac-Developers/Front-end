import KanbanCard from "@/components/KanbanCard";
import KanbanHeader from "@/components/KanbanHeader";
import { NewTaskDialog } from "@/components/NewTaskDialog";
import { Reorder } from "framer-motion";
import { CheckCheck, CircleAlert, SquareCheck } from "lucide-react";
import { useState } from "react";

interface KanbanProps {
	title: String;
}

export default function Kanban({ title }: KanbanProps) {
	const [todoItems, setTodoItems] = useState([0, 1, 2]);
	const [inProgressItems, setInProgressItems] = useState([0, 1, 2]);
	const [doneItems, setDoneItems] = useState([0, 1, 2]);

	return (
		<div className="flex flex-col gap-12 md:mx-[17%] m-4 mt-10 md:mt-28">
			<div className="flex gap-8 items-center">
				<h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
				<NewTaskDialog />
			</div>
			<div className="flex justify-center">
				<div className="flex flex-col justify-between w-full">
					<div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
						{/* Todo */}
						<Reorder.Group
							values={todoItems}
							onReorder={setTodoItems}
							className="flex flex-col gap-y-4 no-scrollbar dark:bg-neutral-800/[0.2] bg-neutral-100 rounded-lg border p-4 drop-shadow-md"
							layoutScroll
							style={{ overflowY: "scroll" }}
						>
							<KanbanHeader title="Todo">
								<CircleAlert color="#ff7a7a" />
							</KanbanHeader>
							{todoItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard
										title="Title"
										description="Description"
										date={"04/05/2024"}
									/>
								</Reorder.Item>
							))}
						</Reorder.Group>

						{/* In Progress */}
						<Reorder.Group
							values={inProgressItems}
							onReorder={setInProgressItems}
							className="flex flex-col gap-y-4 no-scrollbar dark:bg-neutral-800/[0.2] bg-neutral-100 rounded-lg border p-4 drop-shadow-md"
							layoutScroll
							style={{ overflowY: "scroll" }}
						>
							<KanbanHeader title="In Progress">
								<SquareCheck color="#ffa552" />
							</KanbanHeader>
							{inProgressItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard
										title="Title"
										description="Description"
										date={"04/05/2024"}
									/>
								</Reorder.Item>
							))}
						</Reorder.Group>

						{/* Done */}
						<Reorder.Group
							values={doneItems}
							onReorder={setDoneItems}
							className="flex flex-col gap-y-4 no-scrollbar dark:bg-neutral-800/[0.2] bg-neutral-100 rounded-lg border p-4 drop-shadow-md"
							layoutScroll
							style={{ overflowY: "scroll" }}
						>
							<KanbanHeader title="Done">
								<CheckCheck color="#8cff8a" />
							</KanbanHeader>
							{doneItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard
										title="Title"
										description="Description"
										date={"04/05/2024"}
									/>
								</Reorder.Item>
							))}
						</Reorder.Group>
					</div>
				</div>
			</div>
		</div>
	);
}

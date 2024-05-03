import KanbanCard from "@/components/KanbanCard";
import KanbanHeader from "@/components/KanbanHeader";
import { Reorder } from "framer-motion";
import { useState } from "react";

interface KanbanProps {
	title: String;
}

export default function Kanban({ title }: KanbanProps) {
	const [todoItems, setTodoItems] = useState([0, 1, 2]);
	const [inProgressItems, setInProgressItems] = useState([0, 1, 2]);
	const [doneItems, setDoneItems] = useState([0, 1, 2]);

	return (
		<div className="flex flex-col gap-16 mx-[12.5%] m-4 mt-14">
			<h1 className="text-4xl font-bold">{title}</h1>
			<div className="flex justify-center">
				<div className="flex flex-col justify-between w-full">
					<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3">
						<Reorder.Group
							values={todoItems}
							onReorder={setTodoItems}
							className="flex flex-col gap-y-4"
						>
							<KanbanHeader title="Todo" />
							{todoItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard title="item" />
								</Reorder.Item>
							))}
						</Reorder.Group>
						<Reorder.Group
							values={inProgressItems}
							onReorder={setInProgressItems}
							className="flex flex-col gap-y-4"
						>
							<KanbanHeader title="In Progress" />
							{inProgressItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard title="item" />
								</Reorder.Item>
							))}
						</Reorder.Group>
						<Reorder.Group
							values={doneItems}
							onReorder={setDoneItems}
							className="flex flex-col gap-y-4"
						>
							<KanbanHeader title="Done" />
							{doneItems.map((item) => (
								<Reorder.Item key={item} value={item}>
									<KanbanCard title="item" />
								</Reorder.Item>
							))}
						</Reorder.Group>
					</div>
				</div>
			</div>
		</div>
	);
}

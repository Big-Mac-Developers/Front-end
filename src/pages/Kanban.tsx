import KanbanCard from "@/components/KanbanCard";
import KanbanHeader from "@/components/KanbanHeader";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Kanban() {
	const [todoItems, setTodoItems] = useState([0, 1, 2]);
	const [inProgressItems, setInProgressItems] = useState([0, 1, 2]);
	const [doneItems, setDoneItems] = useState([0, 1, 2]);

	return (
		<div className="flex justify-center mx-[12.5%] m-4 mt-14">
			<div className="flex flex-col justify-between w-full">
				<div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3">
					<Reorder.Group values={todoItems} onReorder={setTodoItems}>
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
					>
						<KanbanHeader title="In Progress" />
						{inProgressItems.map((item) => (
							<Reorder.Item key={item} value={item}>
								<KanbanCard title="item" />
							</Reorder.Item>
						))}
					</Reorder.Group>

					<Reorder.Group values={doneItems} onReorder={setDoneItems}>
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
	);
}

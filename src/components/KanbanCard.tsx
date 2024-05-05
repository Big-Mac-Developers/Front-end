import { CircleUser } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DatePickerWithPresets } from "./DatePicker";
import { SubTask } from "@/model/task";
import { User } from "@/model/user";
import { Pencil, Trash2 } from "lucide-react";
import { useTask } from "@/module/Task/TaskHook";
export default function KanbanCard({
	subtask,
	members,
	handleTaskChange,
}: {
	subtask: SubTask;
	members: User[];
	handleTaskChange: (modifiedTask: SubTask) => void;
}) {
	const { task, setAssignee, setDueDate } = useTask({
		subtask,
		members,
		handleTaskChange,
	});

	return (
		<Card
			className={`active:cursor-grabbing cursor-grab dark:hover:brightness-150 hover:brightness-[97%] p-4 border-2`}
		>
			<CardHeader className="flex items-center p-0">
				<div className="flex-grow flex items-center space-x-2">
					<CardTitle className="text-md">{task.title}</CardTitle>
				</div>
				<CardDescription className="flex-grow">
					{subtask.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4 p-0 items-center mt-4 justify-center">
				<DatePickerWithPresets
					date={task.due_date}
					setDate={setDueDate}
				/>
			</CardContent>
			<div className="flex items-center my-4 gap-4">
				<AvatarMenu members={members} setAssignee={setAssignee} />
				{task.assignee && <h3>{task.assignee.username}</h3>}
				<div className="flex-grow"></div>{" "}
				<Pencil
					size={20}
					className="cursor-pointer hover:rounded-md border-2 border-transparent hover:border-gray-500"
				/>
				<Trash2
					size={20}
					className="cursor-pointer hover:rounded-md border-2 border-transparent hover:border-gray-500"
				/>
			</div>
		</Card>
	);
}

function AvatarMenu({
	members,
	setAssignee,
}: {
	members: User[];
	setAssignee: (assignee: string) => void;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<CircleUser className="opacity-60" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Assign Member</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value="bottom">
					{members.map((member) => (
						<DropdownMenuRadioItem
							key={member.id}
							value={member.username}
							onClick={() => setAssignee(member.id)}
						>
							{member.username}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

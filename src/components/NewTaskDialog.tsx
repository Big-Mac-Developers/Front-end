import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MainTask, SubTaskInitial } from "@/model/task";
import { useState } from "react";
export function NewTaskDialog({
	createSubTaskFunc,
	MainTasks,
}: {
	createSubTaskFunc: (arg0: SubTaskInitial) => void;
	MainTasks: MainTask[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [maintaskid, setMainTaskId] = useState("");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const submitStatus = createSubTaskFunc({
			title,
			description,
			status: "todo",
			main_task_id: maintaskid,
		});
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<Button
					size="icon"
					variant="outline"
					className="h-8 w-8 mt-2"
					onClick={() => setIsOpen(true)}
				>
					<PlusIcon size={18} />
				</Button>
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[450px]"
				onInteractOutside={() => setIsOpen(false)}
			>
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>New Task</DialogTitle>
						<DialogDescription>
							Make changes to your task here. Click save when
							you're done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="maintaskid" className="text-right">
								Select Main Task
							</Label>
							<Select onValueChange={setMainTaskId}>
								<SelectTrigger>
									<SelectValue placeholder="Select Main Task" />
								</SelectTrigger>
								<SelectContent>
									{MainTasks.map((task) => (
										<SelectItem
											key={task.id}
											value={task.id}
										>
											{task.title}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="title" className="text-right">
								Title
							</Label>
							<Input
								id="title"
								className="col-span-3"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input
								id="description"
								className="col-span-3"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

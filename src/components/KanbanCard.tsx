import { Avatar, AvatarFallback } from "./ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function KanbanCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-md">Task Name</CardTitle>
				<CardDescription>Task Description</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4 items-center">
				<Avatar>
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<p>04/05/2024</p>
			</CardContent>
		</Card>
	);
}

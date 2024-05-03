import { Avatar, AvatarFallback } from "./ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

interface KanbanCardProps {
	title: string;
}

export default function KanbanCard({ title }: KanbanCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-md">{title}</CardTitle>
				<CardDescription>Task Description</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4 items-center">
				<Avatar>
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<p className="opacity-65">04/05/2024</p>
			</CardContent>
		</Card>
	);
}

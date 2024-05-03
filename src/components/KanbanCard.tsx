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
	description: string;
	date: string;
}

export default function KanbanCard({
	title,
	description,
	date,
}: KanbanCardProps) {
	return (
		<Card className="active:cursor-grabbing cursor-grab dark:hover:brightness-150 hover:brightness-[97%]">
			<CardHeader>
				<CardTitle className="text-md">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4 items-center">
				<Avatar>
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<p className="opacity-65">{date}</p>
			</CardContent>
		</Card>
	);
}

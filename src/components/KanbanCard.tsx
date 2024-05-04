import { CircleUser } from "lucide-react";
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
		<Card className="active:cursor-grabbing cursor-grab dark:hover:brightness-110 hover:brightness-[97%] p-4">
			<CardHeader className="p-0">
				<CardTitle className="text-sm">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-2 p-0 items-center mt-4">
				<CircleUser className="opacity-60" />
				<p className="opacity-65 text-sm">{date}</p>
			</CardContent>
		</Card>
	);
}

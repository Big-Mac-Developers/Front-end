import React from "react";

interface KanbanHeaderProps {
	title: string;
	children?: React.ReactNode;
}

export default function KanbanHeader({ title, children }: KanbanHeaderProps) {
	return (
		<div className="flex justify-between">
			<div className="flex items-center gap-4">
				{children}
				<h2 className="text-xl font-semibold">{title}</h2>
			</div>
		</div>
	);
}

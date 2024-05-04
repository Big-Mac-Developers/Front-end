// Unit (e.g. FIT1045)
export interface Unit {
	title: string;
	assignments: Assignment[];
	active: boolean;
}

// Assignment (e.g. Assignment 1)
export interface Assignment {
	title: string;
	active: boolean;
	main_tasks: MainTask[];
}

// Main task (e.g. Write report)
export interface MainTaskInitial {
	title: string;
	description: string;
	due_date: Date;
	status: Status;
}

export interface MainTask extends MainTaskInitial {
	id: number;
	subtasks: SubTask[];
}

// SubTask (e.g. Write introduction paragraph)
export interface SubTaskInitial {
	title: string;
	description: string;
	due_date?: Date;
	status: Status;
}

export interface SubTask extends SubTaskInitial {
	id: string;
	assignee: string;
	assigned_date: Date;
	completed_date: Date;
}

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

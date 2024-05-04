const mockData = [
	{
		id: crypto.randomUUID(),
		title: " 📃 To do",
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Learn JavaScript",
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Git",
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Python",
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: " ✏️ In progress",
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Learn CSS",
			},
			{
				id: crypto.randomUUID(),
				title: "Learn Golang",
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: " ✔️ Completed",
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Learn HTML",
			},
		],
	},
];

export default mockData;

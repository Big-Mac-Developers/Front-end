const mockData = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

import {SubTaskInitial} from "@/model/task";

export async function createSubTask(
  main_task_id: number,
  title: string,
  description: string
) {
  const subtask: SubTaskInitial = {
    title: title,
    description: description,
    status: "todo",
    main_task_id: main_task_id,
  };
  console.log(subtask);
  const req = await fetch("http://localhost:8000/task/createSub", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      cors: "no-cors",
    },
    body: JSON.stringify(subtask),
  });
  return req;
}

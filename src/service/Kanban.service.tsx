import {SubTaskInitial, Status} from "@/model/task";

export async function createSubTask(
  main_task_id: string,
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

export async function updateSubTask(subtaskId: string, status: Status) {
  const req = await fetch(`http://localhost:8000/task/updateSub/${subtaskId}`, {
    method: "PATCH",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      cors: "no-cors",
    },
    body: JSON.stringify({status: status}),
  });
  return req;
}

import { SubTaskInitial, Status } from "@/model/task";
import { toast } from "react-toastify";
export async function updateSubTask(subtaskId: string, status: Status) {
  const res = fetch(`http://localhost:8000/task/updateSub/${subtaskId}`, {
    method: "PATCH",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      cors: "no-cors",
    },
    body: JSON.stringify({ status: status }),
  });
  return res
}

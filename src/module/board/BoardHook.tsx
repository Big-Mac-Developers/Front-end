import {useState, useMemo} from "react";
import {Board, Section} from "@/model/board";
import {SubTask} from "@/model/task";

const SECTION_CONFIG = {
  todo: {title: " 📃 To do"},
  inProgress: {title: "🚀 In Progress"},
  done: {title: "✅ Done"},
};

export function useBoard({board}: {board: Board}) {
  //need to get subtask from main task
  // need to separate into different sections for kanban board

  const subtasks = useMemo(
    () => board.tasks.flatMap((task) => task.subtasks),
    [board.tasks]
  );

  const [todoTasks, setTodoTasks] = useState<SubTask[]>(
    subtasks.filter((task) => task.status === "todo")
  );

  const [inProgressTasks, setInProgressTasks] = useState<SubTask[]>(
    subtasks.filter((task) => task.status === "in-progress")
  );

  const [doneTasks, setDoneTasks] = useState<SubTask[]>(
    subtasks.filter((task) => task.status === "done")
  );

  const handleTaskChange = (modifiedTask: SubTask) => {
    if (modifiedTask.status === "todo") {
      setTodoTasks((prev) =>
        prev.map((task) => (task.id === modifiedTask.id ? modifiedTask : task))
      );
    } else if (modifiedTask.status === "in-progress") {
      setInProgressTasks((prev) =>
        prev.map((task) => (task.id === modifiedTask.id ? modifiedTask : task))
      );
    } else {
      setDoneTasks((prev) =>
        prev.map((task) => (task.id === modifiedTask.id ? modifiedTask : task))
      );
    }
  };

  const deleteTask = (task: SubTask) => {
    if (task.status === "todo") {
      setTodoTasks((prev) => prev.filter((t) => t.id !== task.id));
    } else if (task.status === "in-progress") {
      setInProgressTasks((prev) => prev.filter((t) => t.id !== task.id));
    } else {
      setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  return {todoTasks, inProgressTasks, doneTasks, handleTaskChange};
}

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import mockData from "@/lib/mockData1";
import {useState} from "react";
import KanbanCard from "@/components/KanbanCard";
import {SubTask} from "@/model/task";
import {Section} from "@/model/board";
import {mockMembers} from "@/lib/mockUsers";
import {useBoard} from "@/module/board/BoardHook";
import {mockBoard} from "@/lib/mockBoard";
const SECTION_CONFIG = {
  todo: {title: " 📃 To do"},
  inProgress: {title: "🚀 In Progress"},
  done: {title: "✅ Done"},
};

export default function KanbanBoard() {
  const {todoTasks, inProgressTasks, doneTasks, handleTaskChange} = useBoard({
    board: mockBoard,
  });

  const sections: Section[] = [
    {id: "todo", title: SECTION_CONFIG.todo.title, tasks: todoTasks},
    {
      id: "in-progress",
      title: SECTION_CONFIG.inProgress.title,
      tasks: inProgressTasks,
    },
    {id: "done", title: SECTION_CONFIG.done.title, tasks: doneTasks},
  ];
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const {source, destination} = result;
    const sourceSection = sections.find((e) => e.id === source.droppableId);
    const selectedTask = sourceSection?.tasks.splice(source.index, 1);

    const destinationSection = sections.find(
      (e) => e.id === destination.droppableId
    );
    if (selectedTask) {
      destinationSection?.tasks.splice(destination.index, 0, selectedTask[0]);
      selectedTask[0].status = destination.droppableId as
        | "todo"
        | "in-progress"
        | "done";
      handleTaskChange(selectedTask[0]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col justify-between w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
          {sections.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="kanban__section dark:bg-neutral-800/[0.2] bg-neutral-100 p-4 rounded-lg border"
                  ref={provided.innerRef}
                >
                  <div className="text-xl font-bold mb-4">{section.title}</div>
                  <div className="gap-2 flex flex-col">
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1",
                            }}
                          >
                            <KanbanCard
                              subtask={task}
                              members={mockMembers}
                              handleTaskChange={handleTaskChange}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

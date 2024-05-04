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

export default function KanbanBoard() {
  const [data, setData] = useState<Section[]>(mockData);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const {source, destination} = result;
    console.log(source);
    console.log(destination);
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      removed.status = destinationCol.id;
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
      console.log(destinationTask);
      setData([...data]);
    } else {
      const sourceSection = data.find((e) => e.id === source.droppableId);
      const selectedTask = sourceSection?.tasks.splice(source.index, 1);
      const destinationSection = data.find(
        (e) => e.id === destination.droppableId
      );
      if (selectedTask) {
        destinationSection?.tasks.splice(destination.index, 0, selectedTask[0]);
      }
      setData([...data]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col justify-between w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
          {data.map((section) => (
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
                              title={task.title}
                              description="Description"
                              date="01/01/2004"
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

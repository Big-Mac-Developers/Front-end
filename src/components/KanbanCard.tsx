import {CircleUser} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {DatePickerWithPresets} from "./DatePicker";
import {SubTask} from "@/model/task";
import {useState} from "react";
import {User} from "@/model/user";
import {set} from "date-fns";
import {Pencil, Trash2} from "lucide-react";
export default function KanbanCard({
  subtask,
  members,
}: {
  subtask: SubTask;
  members: User[];
}) {
  const [dueDate, setDueDate] = useState<Date | undefined>(subtask.due_date);
  const [assignee, setAssignee] = useState<string | undefined>(
    subtask.assignee
  );

  return (
    <Card
      className={`active:cursor-grabbing cursor-grab dark:hover:brightness-110 hover:brightness-[97%] p-4 border-2 hover:border-black dark:hover:border-blue-500 active:border-green-500 ${
        dueDate != null && dueDate < new Date() ? "border-red-500" : ""
      }`}
    >
      <CardHeader className="flex items-center p-0">
        <div className="flex-grow flex items-center space-x-2">
          <CardTitle className="text-sm">{subtask.title}</CardTitle>
        </div>
        <CardDescription className="flex-grow">
          {subtask.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4 p-0 items-center mt-4 justify-between">
        <DatePickerWithPresets date={dueDate} setDate={setDueDate} />
      </CardContent>
      <div className="flex items-center my-4 gap-4">
        <AvatarMenu members={members} setAssignee={setAssignee} />
        <h3>{assignee}</h3>
        <div className="flex-grow"></div>{" "}
        <Pencil
          size={20}
          className="cursor-pointer hover:rounded-md border-2 border-transparent hover:border-gray-500"
        />
        <Trash2
          size={20}
          className="cursor-pointer hover:rounded-md border-2 border-transparent hover:border-gray-500"
        />
      </div>
    </Card>
  );
}

function AvatarMenu({
  members,
  setAssignee,
}: {
  members: User[];
  setAssignee: (assignee: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUser className="opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Assign Member</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          {members.map((member) => (
            <DropdownMenuRadioItem
              value={member.username}
              onClick={() => setAssignee(member.username)}
            >
              {member.username}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

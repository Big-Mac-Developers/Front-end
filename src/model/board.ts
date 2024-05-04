import { MainTask, SubTask, Status } from '@/model/task';
export interface Board {
    board_id: number
    title: string
    moderator_id: string
    members: string[]
    tasks: MainTask[]
}

export interface Section {
    id: Status;
    title: string;

    tasks: SubTask[];
}

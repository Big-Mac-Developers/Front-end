import { MainTask, SubTask, Status } from '@/model/task';
import { User } from '@/model/user';
export interface Board {
    board_id: number
    title: string
    moderator_id: string
    members: User[]
    tasks: MainTask[]
}

export interface Section {
    id: Status;
    title: string;

    tasks: SubTask[];
}

export interface BoardInitail {
    title: string
    description: string


}
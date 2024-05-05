import { toast } from 'react-toastify';
import { BoardInitail } from '@/model/board';
export async function createBoard(boardInitial: BoardInitail) {


    try {
        const req = fetch('http://localhost:8000/board/create', {
            method: 'POST',
            body: JSON.stringify(boardInitial),

        });
        const response = await toast.promise(req, {
            pending: 'Create board...',
            success: 'Ceated board successfully',
            error: 'Failed to create board',
        });

        console.log(await response.json())



    }
    catch (error) {
    }
}
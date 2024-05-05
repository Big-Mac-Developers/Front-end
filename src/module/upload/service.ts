import { toast } from 'react-toastify';
export async function uploadPdf(pdfData: File) {
    console.log(pdfData.name)
    const formData = new FormData();
    formData.append('file', pdfData);
    console.log(formData)
    try {
        const req = fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,

        });
        const response = await toast.promise(req, {
            pending: 'Uploading file...',
            success: 'File uploaded successfully',
            error: 'Failed to upload file',
        });



        return await response.json() as string

    }
    catch (error) {
    }
}
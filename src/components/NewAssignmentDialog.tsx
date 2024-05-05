import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { MyDropzone } from "@/module/upload/DropZone";
import { useState } from "react";
// import { createBoard } from "@/module/board/Service";
// import { BoardInitail } from "@/model/board";
import { uploadPdf } from "@/module/upload/service";

export function NewAssignmentDialog() {
	const [isFile, setIsFile] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [text, setText] = useState("");
	const [summary, setSummary] = useState("");

	// const onSubmit = async () => {
	// 	const formData: BoardInitail = {
	// 		title: title,
	// 		description: description,
	// 	};
	// 	createBoard(formData);
	// 	console.log(open);
	// 	setOpen(false);
	// };

	const uploadFile = async () => {
		if (file) {
			const val = await uploadPdf(file);
			val ? setSummary(val) : setSummary("Failed to upload file");
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon" variant="outline" className="h-8 w-8 mt-2">
					<PlusIcon size={18} />
				</Button>
			</DialogTrigger>
			<DialogContent className="flex w-min">
				<div className="col-span-12">
					<DialogHeader>
						<DialogTitle>New Assignment</DialogTitle>
						<DialogDescription>
							Choose to upload a file or enter text. Click save
							when you're done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="title" className="text-right">
								Title
							</Label>
							<Input
								id="title"
								value={title}
								className="col-span-3"
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input
								id="description"
								value={description}
								className="col-span-3"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div className="flex items-center space-x-4 mb-4">
							<Button
								// variant={!isFile ? "solid" : "outline"}
								onClick={() => setIsFile(false)}
							>
								Enter Text
							</Button>
							<Button
								// variant={isFile ? "solid" : "outline"}
								onClick={() => setIsFile(true)}
							>
								Upload File
							</Button>
						</div>
						{isFile ? (
							<>
								<MyDropzone file={file} setFile={setFile} />
							</>
						) : (
							<textarea
								className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
								placeholder="Enter your text here..."
								rows={5}
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						)}
						<Button onClick={uploadFile}>Save changes</Button>
					</div>
				</div>
				{summary && (
					<div className="col-span-1">
						<h3 className="font-bold text-lg mb-2">Summary</h3>
						<div>
							<strong>Text:</strong>
							<div className="bg-white dark:bg-gray-800 p-2 rounded-md  max-h-40">
								{summary || "No text entered."}
							</div>
						</div>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}

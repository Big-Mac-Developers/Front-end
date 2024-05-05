import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
export function MyDropzone({
	file,
	setFile,
}: {
	file: File | null;
	setFile: (file: File) => void;
}) {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		setFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, fileRejections } = useDropzone({
		accept: {
			"application/pdf": [".pdf"],
		},
		onDrop,
	});

	const rejectedFiles = fileRejections.length > 0 && (
		<ul>
			{fileRejections.map(({ file, errors }) => (
				<li key={file.name}>
					{file.name} - {errors.map((e) => e.message).join(", ")}
				</li>
			))}
		</ul>
	);
	return (
		<div>
			<div
				{...getRootProps()}
				style={{
					border: "2px dashed #ccc",
					padding: "20px",
					cursor: "pointer",
				}}
			>
				<input {...getInputProps()} />

				{file ? (
					<p>Uploaded {file.name}</p>
				) : (
					<p>
						Drag 'n' drop assignment specification here, or click to
						select files
					</p>
				)}
			</div>

			{rejectedFiles}
		</div>
	);
}

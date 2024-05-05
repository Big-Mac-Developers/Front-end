import React, {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import PdfViewer from "../viewer/PDFViwer";
export default function MyDropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Convert files to the format expected by react-doc-viewer
    const mappedFiles = acceptedFiles.map((file) => ({
      uri: URL.createObjectURL(file),
      fileType: file.type.split("/")[1], // Extract the subtype from MIME type
    }));
    console.log(mappedFiles);
    setFiles(mappedFiles);
  }, []);

  const {getRootProps, getInputProps, fileRejections} = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  const handleMouseUp = () => {
    const text = window.getSelection().toString();
    document.getElementById("selectedText").value = text;
  };

  const rejectedFiles = fileRejections.length > 0 && (
    <ul>
      {fileRejections.map(({file, errors}) => (
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
        style={{border: "2px dashed #ccc", padding: "20px", cursor: "pointer"}}
      >
        <input {...getInputProps()} />

        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {files.length > 0 && (
        <div onMouseUp={handleMouseUp}>
          <PdfViewer fileUrl={files[0].uri} />
          <textarea id="selectedText" rows="4" cols="50"></textarea>
        </div>
      )}
      {rejectedFiles}
    </div>
  );
}

import React, { useState } from "react";

export default function DragDropFile() {
  const [files, setFiles] = useState([]);
  const [dropError, setDropError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
    setDropError(false);
  };

  const dragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const fileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    console.log(files);
    for (let file of files) {
      setFiles((prevFiles) => [...prevFiles, file.name]);
    }
  };

  const wrongDrop = (e) => {
    e.preventDefault();
    if (e.target.id != "dropFileContainer") setDropError(true);
  };

  return (
    <div
      className="bg-blue-900 project"
      onDrop={wrongDrop}
      onDragOver={wrongDrop}
    >
      <h1>Drag Drop Files</h1>
      <div
        id="dropFileContainer"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        className={`w-3/4 h-60 border-4 z-10 border-white border-dashed flex flex-col items-center justify-center text-purple-300 transition-all duration-200 
        ${isDragging ? `border-solid border-purple-300` : ``}
        ${dropError ? `animate-pulse text-red-400` : ``}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-16 h-16 transition-all transform duration-300 z-0 ${
            isDragging ? `rotate-180` : ``
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xl font-bold">
          Drag Files Inside This Container
        </span>
      </div>

      <div className="mt-10 text-xl">
        {files.length ? <h2>Files Uploaded:</h2> : `No files uploaded.`}
        <ul>
          {files.map((file, index) => {
            return (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 11h4m-2-2v4"
                  />
                </svg>
                <span>{file}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; // Ensure you have the shadcn Button component installed

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [edgesImage, setEdgesImage] = useState(null);
  const [noBgImage, setNoBgImage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { edges, no_background } = response.data;

      // Set both images in state
      setEdgesImage(`data:image/jpeg;base64,${edges}`);
      setNoBgImage(`data:image/png;base64,${no_background}`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
      {/* File Input */}
      <input
        type="file"
        onChange={handleFileChange}
        className="text-lg text-gray-700 border border-gray-300 rounded px-4 py-2"
      />

      
      <div className="mt-4">
        <Button onClick={handleUpload} >
          Upload and Process
        </Button>
      </div>

      {/* Display Images */}
      {edgesImage && (
        <div className="mt-4">
          <p className="text-2xl font-semibold">Edges Image:</p>
          <img src={edgesImage} alt="Edges" className="max-w-full h-auto mt-2 border rounded" />
        </div>
      )}

      {noBgImage && (
        <div className="mt-4">
          <p className="text-2xl font-semibold">No Background Image:</p>
          <img src={noBgImage} alt="No Background" className="max-w-full h-auto mt-2 border rounded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

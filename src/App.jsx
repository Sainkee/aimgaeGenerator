import { useState } from "react";
import { query } from "./components/APIManeger";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = async () => {
    try {
      const imageData = await query(prompt);

      setImage(imageData);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="container text-center mx-auto py-8">
      <h1 className="text-3xl font-bold my-10 ">Image Generator</h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="w-64 px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGenerateImage}
        >
          Get Result
        </button>
      </div>

      {image && (
        <img
        src={`data:image/jpeg;base64,${image}`}
          className="h-[50dvh] w-full"
          alt="Generated Image"
        />
      )}
    </div>
  );
}

export default App;

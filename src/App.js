import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p className="text-gray-500 mt-8">November 30, 2022 <span className="ml-2">Product</span></p>
      <h1 className="text-4xl font-semibold mt-4">Introducing ChatGPT</h1>
      <div className="flex mt-6 space-x-4">
        <a href="#" className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800">
          Try ChatGPT →
        </a>
        <a href="#" className="text-black text-sm mt-3 hover:underline">
          Try ChatGPT for Work →
        </a>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 p-4 bg-blue-100 rounded-xl mb-4">
        Tailwind CSS is Working 
      </h1>
    <Card name="Aniket" role="Software Developer" description="A passionate software developer." />
    <Card />
    </>
  );
}

export default App;

import { useState } from "react";
function App() {
  const [color, setColor] = useState("beige");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-4 py-2 rounded-2xl">
          <button
          onClick={()=> setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shaow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Magenta
          </button>
          <button
            onClick={()=> setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shaow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={()=> setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shaow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
          onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shaow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Sky
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

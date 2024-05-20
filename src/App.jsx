import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-[100vh] duration-200 flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
        <div className="min-w-max mb-4 flex flex-wrap gap-3"> 
          <button onClick={()=>setColor("red")} className="bg-red-700 rounded-lg shadow-lg p-2 text-white px-4 py-1  ">Red</button>
          <button onClick={()=>setColor("green")} className="bg-green-700 rounded-lg shadow-lg p-2 text-white px-4 py-1">Green</button>
          <button onClick={()=>setColor("purple")} className="bg-purple-700 rounded-lg shadow-lg p-2 text-white px-4 py-1">Purple</button>
          <button  onClick={()=>setColor("yellow")} className="bg-yellow-700 rounded-lg shadow-lg p-2 text-white px-4 py-1">Yellow</button>
          <button  onClick={()=>setColor("teal")} className="bg-teal-700 rounded-lg shadow-lg p-2 text-white px-4 py-1">Teal</button>
        </div>
    </div>
  );
}

export default App;

import React from "react";
import Card from "./components/Card";

function App() {
  let obj = {
    name:"Raghav",
    age:18,
  }

  const arr = [1, 2, 3, 4]
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card name = "Larning react" btnText = "clickMe" object = {obj} myArr = {arr}/>
      <Card name = "with ChaiOrCode" btnText = "visitMe"/>
    </div>
  );
}

export default App;
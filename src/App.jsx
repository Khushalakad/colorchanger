import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-5 px-2 py-5">
          <div className="fixed flex-wrap justify-center gap-1 shadow-lg bg-black px-3 py-2 rounded-3-lg" >
            <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Red"}}
             onClick={()=>{
              setColor("Red")
             }}>Red</button>
            <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx2" style={{backgroundColor:"Blue"}}
             onClick={()=>{
              setColor("Blue")
             }}>Blue</button>
            <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Green"}}
             onClick={()=>{
              setColor("Green")
             }}>Green</button>
            <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Brown"}}
             onClick={()=>{
              setColor("Brown")
             }}>Brown</button>
              <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Gray"}}
             onClick={()=>{
              setColor("Gray")
             }}>Gray</button>
              <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Violet"}}
             onClick={()=>{
              setColor("Violet")
             }}>Violet</button>
              <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Pink"}}
             onClick={()=>{
              setColor("Pink")
             }}>Pink</button>
              <button className="outline-none px-5 py-1 rounded-full text-white shadow-lg mx-2" style={{backgroundColor:"Orange"}}
             onClick={()=>{
              setColor("Orange")
             }}>Orange</button>
          </div>
        </div>
      </div>
  )
}

export default App

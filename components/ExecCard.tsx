import React from "react";
import { execs, type Exec } from "../lib/data";

 function Profile({id, name, role, image}:Exec){
  return(
    <div>
      <h3>{role}</h3>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
 }
 export default function Gallery(){
  return(
    <section>
      <h1>Executive Board</h1>
      {execs.map((e) => (
        <Profile
        key={e.id}{...e}
      />
    ))}
  </section>
  );
}
/*
This is with like actual UI, but I used chat gpt to help me with this bc i didnt know how to execute the vision i wanted, but changed parts of it to be bettwe functioned (loops, organization, etc)}
function Profile({name, role, image}){
  return(
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
    {//i tried to stle it similar to the insta with like a browser bar header that contains the role}
   <div className="bg-blue-600 text-white text-sm px-3 py-2 flex items-center justify-between">
   <span>{role}</span>
   {//here i wanted to add 3 dots like you would see in a browser}
    <div className="flex gap-1">
    {[1,2,3].map((dot)=>(
          className="w-2 h-2 bg-gray-300 rounded-full"></div>
></div>
    ))}
   //this is for the image, which should be below the browser bar
   <div className="p-4 flex justify-center bg-gray-50">
   <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"/>
   </div>
    //this is for the name, which should be below the image
    ,div className="text-center pb-4">
    <p className="font-medium text-gray-800">{name}</p>
    </div>
    </div>
  );
 }
  //i also asked chat to help me with a 4x2 layout (put pres, vp, sec, tres 1st row, then the rest of exec below) with the title, then i inputted the REACT methodology (what i have above), just implementing the ui with this
 export default function Gallery(){
  return(
  <section className="min-h-screen bg-greay-200 py-12">
  <h1 className="tetxt-3xl font-bold tetxt-center mb-10">
Executive Board</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10">
{execs.map((e) => (
  <Profile
  key={e.id}
  name={e.name}
  role={e.role}
  image={e.image}/>
))}
</div>
</section>
  );
}
  */
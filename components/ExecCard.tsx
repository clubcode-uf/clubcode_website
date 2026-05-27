import React from "react";
//import { execs, type Exec } from "../lib/data";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { type Exec } from "../lib/data";
export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800"
    
     style={{
    textAlign: "center",
    color: "blue"
  }}>
    
      <h4 className="block text-center text-2xl m-1" style={{ fontFamily: 'VT323' }}>  {exec.role}</h4>
      <img src={exec.image} alt={exec.name} 
      style={{
      width: 200,
      height: 200,
      display: "block",
      margin: "0 auto" // centers image
        }}
        />
      <p style={{ fontFamily: 'VT323' }}>{exec.name}</p>
    </div>
  );
}
 

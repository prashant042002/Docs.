import React, { useState } from "react";
import Cardmore from "./Cardmore";
import Card from "./Card";
import { useRef } from 'react';

function Foreground() {

  const ref = useRef(null);
  
  const data = [
    {
      desc: "Hi my name is Prashant Kumar I am from patna bihar.",
      filesize: "0.9mb",
      close: true,
      tag: {isOpen: true, 
            tagTitle: "download", 
            tagColor: "green"
        },
    },
    {
      desc: "Hi my name is Prashant Kumar I am from patna bihar.",
      filesize: "0.9mb",
      close: true,
      tag: {isOpen: true, 
            tagTitle: "download", 
            tagColor: "blue"
        },
    },
    {
      desc: "Hi my name is Prashant Kumar I am from patna bihar.",
      filesize: "0.9mb",
      close: true,
      tag: {isOpen: true, 
            tagTitle: "download", 
            tagColor: "green"
        },
    },
  ]
  
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-3">
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />,
        <Cardmore data={item} reference={ref} />
        ))};
    </div>
  );
}

export default Foreground;

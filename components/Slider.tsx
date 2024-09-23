
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Slider() {
  return (
    <div className="h-[20rem] mt-9 bg-slate-100">
      <Carousel className="rounded-none">

      <div className="flex justify-center bg-slate-100 w-full h-full">      
        <Image width={1920} height={1080} className="h-auto w-1/2 mt-0" src="/img/1.png" alt="..." />
      </div> 

      <div className="flex justify-center bg-slate-100 w-full h-full">
        <Image width={1920} height={1080} className="h-auto w-1/2 mt-0" src="/img/2.png" alt="..." />
      </div> 

      <div className="flex justify-center bg-slate-100 w-full h-full">
        <Image width={1920} height={1080} className="h-auto w-1/2 mt-0" src="/img/3.png" alt="..." />
      </div> 

      <div className="flex justify-center bg-slate-100 w-full h-full">
        <Image width={1920} height={1080} className="h-auto w-1/2 mt-0" src="/img/4.png" alt="..." />
      </div> 

      <div className="flex justify-center bg-slate-100 w-full h-full">
        <Image width={1920} height={1080} className="h-auto w-1/2 mt-0" src="/img/5.png" alt="..." />
      </div>  

      </Carousel>
    </div>
  );
}

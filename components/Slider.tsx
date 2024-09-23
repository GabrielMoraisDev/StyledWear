
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Slider() {
  return (
    <div className="h-[24rem] mt-10">
      <Carousel>
      <div className="flex justify-center bg-slate-100 w-full"><Image width={1920} height={1080} className="h-auto w-auto" src="/img/1.png" alt="..." /></div> 
      <div className="flex justify-center bg-slate-100 w-full"><Image width={1920} height={1080} className="h-auto w-auto" src="/img/2.png" alt="..." /></div> 
      <div className="flex justify-center bg-slate-100 w-full"><Image width={1920} height={1080} className="h-auto w-auto" src="/img/3.png" alt="..." /></div> 
      <div className="flex justify-center bg-slate-100 w-full"><Image width={1920} height={1080} className="h-auto w-auto" src="/img/4.png" alt="..." /></div> 
      <div className="flex justify-center bg-slate-100 w-full"><Image width={1920} height={1080} className="h-auto w-auto" src="/img/5.png" alt="..." /></div> 
      </Carousel>
    </div>
  );
}

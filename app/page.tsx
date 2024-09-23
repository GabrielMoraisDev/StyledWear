import Navbar from "@/components/Navbar";
import {Slider} from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-red-900 sm:bg-green-900 md:bg-purple-900 lg:bg-orange-900 xl:bg-slate-900 2xl:bg-red-900 w-full h-screen">
   <Navbar></Navbar>
   <Slider></Slider>
    </div>
  );
}

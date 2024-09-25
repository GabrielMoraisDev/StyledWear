import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Slider} from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-red-900 sm:bg-green-900 md:bg-purple-900 lg:bg-orange-200 xl:bg-white 2xl:bg-red-900 w-full h-screen">
   <Navbar></Navbar>
   <Slider></Slider>

   <div className="w-[92%] m-auto">
    <div className="h-96 bg-white"></div>

    <hr className="border-slate-400"/>
   <Footer></Footer>
   </div>
    </div>
  );
}

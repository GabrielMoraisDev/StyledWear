import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import {Slider} from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-red-900 sm:bg-green-900 md:bg-purple-900 lg:bg-orange-200 xl:bg-white 2xl:bg-red-900 w-full h-screen">
   <Navbar></Navbar>
   <Slider></Slider>

   <div className="w-[92%] m-auto">

   <p className="text-xl text-black text-center mt-5 text-font-300 uppercase">Elegância que reflete sua essência</p>
   <hr className="my-3 custom-hr"/>

    <Features></Features>

    <hr className="custom-hr"/>
   <Footer></Footer>
   </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Vitrini from "@/components/Vitrini";
import Catalog from "@/components/Catalog";
import {Slider} from "@/components/Slider";

export default function Home() {
  return (
    <div className="w-full h-auto">
   <Navbar></Navbar>
   <Slider></Slider>

   <div className="w-[92%] m-auto">

   <p className="text-xl text-black text-center mt-5 text-font-300 uppercase">Elegância que reflete sua essência</p>
   <hr className="my-3 custom-hr"/>

    <Features></Features>
    <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">Acessórios sofisticados para seu cotidiano, <br /> eventos de classe entre outros</p>

    <Vitrini></Vitrini>
    <hr className="custom-hr mt-7"/>
    </div>

    <Catalog></Catalog>
    <div className="w-[92%] m-auto">
    <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">“As joias certas realçam sua beleza de formas inimagináveis.”</p>

    <hr className="custom-hr"/>
   <Footer></Footer>
   </div>
   
    </div>
  );
}

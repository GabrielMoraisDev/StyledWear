import Image from "next/image"
export default function Vitrini(){
    return(
        <>
        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
            <Image width={300} height={300} src='/img/vitrini1.png' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center">
            <div className="w-full h-52 lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-red-300 xl:text-3xl xl:mt-5">PAR DE ALIANÇAS DE OURO 18K</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 3.500,00</label>
                <p className="text-2xl text-red-300 xl:text-3xl">R$ 2.500,00 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Alianças fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-1/2">
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">COMPRAR</div>
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">VER MAIS</div>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
                <Image width={300} height={300} src='/img/vitrini1.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="md:flex place-items-center">
        <div className="w-full h-52 lg:h-80 overflow-hidden md:mr-5 xl:w-[50rem] md:h-auto">
                <Image width={500} height={500} src='/img/vitrini2.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
            <div className="w-full h-52 lg:h-80 mb-7 md:text-right">
                <h1 className="text-xl text-font-300 text-red-300 xl:text-3xl xl:mt-5">PAR DE ALIANÇAS DE OURO 18K</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 3.500,00</label>
                <p className="text-2xl text-red-300 xl:text-3xl">R$ 2.500,00 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl xl:float-end">Alianças fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-1/2 xl:float-end">
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">COMPRAR</div>
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">VER MAIS</div>
                    </div>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/vitrini3.png' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center">
            <div className="w-full h-52 lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-red-300 xl:text-3xl xl:mt-5">PAR DE ALIANÇAS DE OURO 18K</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 3.500,00</label>
                <p className="text-2xl text-red-300 xl:text-3xl">R$ 2.500,00 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Alianças fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-1/2">
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">COMPRAR</div>
                        <div className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-65 cursor-pointer duration-300">VER MAIS</div>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/vitrini3.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

        </>
    )
}
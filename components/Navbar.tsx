export default function Navbar() {
    return (
        <>
        <div className="h-20 w-full bg1 z-50">
            <h1 className="text-center text-black text-font-500 text-4xl uppercase pt-5">Beauty Style</h1>
            <hr className="w-[89.3%] m-auto border-black mt-2"/>
        </div>
            <nav className="bg1 sticky top-0 w-full h-16 z-50 flex text-font-300 place-items-center">
                <div className="sm:ml-10 sm:text-sm md:text-sm md:ml-14 xl:text-md xl:ml-20 text-white text-md cursor-pointer">BRINCOS</div>
                <div className="sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer">ANÉIS</div>
                <div className="sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer">COLARES</div>
                <div className="sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer">PULSEIRAS</div>

                <div className="flex ml-auto sm:mr-10 md:mr-12 lg:mr-14 xl:mr-20 w-[30%] h-12">
                    <div className="w-[60%] bg-white h-10 flex ml-auto mr-2 rounded-md overflow-hidden">
                        <input type="text" className="flex place-items-center bg-white text-black border-0 w-[80%] h-10 pl-6 font-sans focus:outline-none focus:ring-0" placeholder="Pesquisar..."/>
                        <div className="w-[1px] h-[70%] my-auto bg-slate-700 text-white"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex m-auto justify-center bi bi-search text-black" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <div className="bg-transparent border border-white text-white rounded-full w-10 h-10 ml-3 flex justify-center place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </div>
                    <div className="bg-transparent border border-white text-white rounded-full w-10 h-10 ml-3 flex justify-center place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}

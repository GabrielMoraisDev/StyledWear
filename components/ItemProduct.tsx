import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css'

interface ProdProps {
    title: string;
    page: string;
    description: string;
    imagem: string;
    price: number;
  }

export default function ItemProduct({title, page, description, imagem, price}:ProdProps){
    const valorFormatado = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <div>
        <div className="w-72 h-auto m-auto pb-5 mt-6 mb-2">
            <Link href={`${page}/${title}?description=${description}&imagem=${imagem}&${price}`}>
                <Image width={300}  height={300} src={`/img/${imagem}`} alt=''></Image>
                <h1 className='text-font-300 text-center mt-5 text-xl uppercase'>{title}</h1>
                <h1 className='text-font-300 text-center text-3xl uppercase text-slate-600'>{valorFormatado}</h1>
                <p className="mt-3 w-full truncate">{description}</p>
                <div className="w-full h-auto p-3 bg1 text-white mt-3 text-xl text-center rounded-md cursor-pointer hover:opacity-70 duration-300">VER PRODUTO</div>
            </Link>
        </div>
        <hr className="border-slate-400 w-full m-auto"/>
        </div>
    )
}
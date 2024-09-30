import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ItemProduct from '@/components/ItemProduct'
export default function Shirts(){
    return(
        <div className='mb-10'>
        <Navbar></Navbar>
            <div className="w-[92%] grid grid-rows-8 xl:grid-rows-2 xl:grid-cols-4 place-items-center m-auto">
                <ItemProduct page='shirts' title='Jaqueta BeWase' imagem='vitrini1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Camisa EveryWear' imagem='shirt1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Jaqueta Wear Double' imagem='vitrini2.png' price={2999.99} description='Esta jaqueta, confeccionada 100% em algodão de alta qualidade, combina conforto e estilo em um design clássico e versátil. '></ItemProduct>
                <ItemProduct page='shirts' title='Camisa OnlyBasic' imagem='shirt2.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Jaqueta BeWase' imagem='vitrini1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Jaqueta BeWase' imagem='vitrini1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Jaqueta BeWase' imagem='vitrini1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
                <ItemProduct page='shirts' title='Jaqueta BeWase' imagem='vitrini1.png' price={1299.99} description='Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. '></ItemProduct>
            </div>
            <div className="w-[92%] m-auto mt-7">
            <hr className="custom-hr"/>
            <Footer></Footer>
            </div>
        </div>
    )
}
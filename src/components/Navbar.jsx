import React from "react";
import { useNavigate } from "react-router";

export default function Navbar(){

    const nav=useNavigate();
    return(
        <div className='flex flex-wrap justify-center bg-blue-600  hover:text-blue-400 '>
            <a onClick={()=>nav('/agregar')}><h1 className='text-white text-2xl mr-2'>Agregando el producto así bien maciso</h1></a>
            <a onClick={()=>nav('/')}><h1 className='text-white text-3xl '>EL CATALOGO PA, PERO NO UNO PEDORRO, NO NO NO, ES UN PINCHE CATALOGAZO</h1></a>
            <a onClick={()=>nav('/carrito')}><h1 className='text-white text-2xl ml-2'>Bye Bye</h1></a>
        </div>
    )
}
import React from "react";


export default function Catlog({products, onClick}) {



    return (
        <>
            <div className='flex flex-wrap align-baseline justify-around'>

                {products.map((product) => (
                    <div key={product.id} className='shadow shadow-gray-400 w-3/10 border-gray-500 m-2 rounded-2xl'>
                        <div>
                            <h1 className='my-2'>{product.nombre}</h1>
                            <p className='text-gray-600'>{product.descripcion}</p>
                            <p className='text-gray-400'>Cantidad: {product.cantidad}</p>
                            <button onClick={()=>onClick(product.id)} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 active:bg-amber-400 focus:ring-blue-300 mt-2">
                                Agregar
                            </button>
                        </div>
                        <img src={product.src} alt="imagen" className='w-40 h-40' />
                    </div>
                ))}

            </div>


        </>
    )
}
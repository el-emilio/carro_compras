import React from "react";
export default function Catlog() {


    const products = [
        { nombre: "camara", cantidad: 4, id: 1345 },
        { nombre: "lente", cantidad: 4, id: 1345 },
        { nombre: "micro", cantidad: 4, id: 1345 },

    ]

    return (
        <>
            <div className='flex flex-wrap justify-center'>

                {products.map((product) => (
                    <div key={product.id} className='shadow shadow-gray-400 w-4/12 justify-center'>
                        <p>{product.nombre}</p>
                    </div>
                ))}

            </div>


        </>
    )
}
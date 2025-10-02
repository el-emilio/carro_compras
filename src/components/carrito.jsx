import React from 'react'


export default function Carrito({products, onClick}) {
  return (

    <div className=' flex flex-wrap fixed bottom-0 bg-blue-500 w-dvw'>
      {products.map((product) => (
        <div className='flex justify-center shadow-md shadow-gray-600 border border-gray-500 w-2/12 bg-white m-2 rounded-2xl'>
          <p>{product.nombre}</p>
          <p className='text-gray-100'>Cant: {product.cantidad}</p>
          <button onClick={()=>onClick(product.id)} className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-400 active:bg-red-800'>
            <span className='text-xl'>&times;</span>
          </button>
        </div>
      ))}

    </div>

  )
}

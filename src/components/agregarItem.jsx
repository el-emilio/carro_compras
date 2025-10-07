import React from 'react'
import { useState } from 'react'

export default function AgregarItem({setProducts, products}) {

    const [visible, setVisible] = useState(false)

    const [product, setProduct]=useState({nombre: "", descripcion: "", src: null, cantidad: 1, id: Date.now()})

    const guardarImagen=(e)=>{

        const file=e.target.files[0]

        if(file){
            setProduct({...product, src: URL.createObjectURL(file)})
        }

    }

    const agregarProduct=(e)=>{
        e.preventDefault();
        setProducts([...products, product])
        setProduct({nombre: "", descripcion: "", src: null, cantidad: 1, id: Date.now()})
    }

    return (
        <div className='flex justify-center' >
            <div className='flex justify-center border-gray-500 w-8/12 bg-white m-2 gap-2 rounded'>
                <p>Agregar Equipo</p>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setVisible(!visible)} className='cursor-pointer'>{visible ? "⬇️" : "⬆️"}</button>
            </div>

            <div className='flex flex-col w-full' onSubmit={agregarProduct}>
                {visible && (
                    <form className='w-full flex flex-col gap-4'action="">
                        <label htmlFor="Nombre">
                            <input type="text" placeholder='Nombre' id='nombre' value={product.nombre} onChange={(e)=>setProduct({...product, nombre: e.target.value})}/>
                        </label>
                        <label htmlFor="Descripción">
                            <input type="text" placeholder='Descripción' id='descripcion' value={product.descripcion} onChange={(e)=>setProduct({...product, descripcion: e.target.value})}/>
                        </label>
                        <label htmlFor="Cantidad">
                            <input type="number" placeholder='Cantidad' id='cantidad' min={(1)} value={product.cantidad} onChange={(e)=>setProduct({...product, cantidad: e.target.value})}/>
                        </label>
                        <label htmlFor="Imagen">
                            <input type="file" accept='image/*' placeholder='imagen' id='imagen' required onChange={guardarImagen}/>
                        </label>

                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 active:bg-amber-400 focus:ring-blue-300 mt-2">
                            Agregar equipo
                        </button>

                    </form>
                )}

            </div>

        </div>
    )
}
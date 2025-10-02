import React from 'react'
import {useState} from 'react'

export default function AgregarItem(){

    const[visible, setVisible]=useState(false)

    return(
        <div className='flex justify-center' >
            <div className='flex justify-center border-gray-500 w-8/12 bg-white m-2 gap-2 rounded'>
                <p>Agregar Equipo</p>
            </div>
            <div className='flex justify-center'>
                <button onClick={()=>setVisible(!visible)} className='cursor-pointer'>{visible?"⬇️":"⬆️"}</button>
            </div>

        <div className='flex'>
            {visible&&(
            <form action="">
                <label htmlFor="nombre">
                    <input type="text" placeholder='nombre' id='nombre'/>
                </label>
                
            </form>
        )}

        </div>
        
        </div>
    )
}
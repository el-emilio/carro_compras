import React from "react";
import Carrito from "./carrito";
import Catlog from "./Catlog";
import AgregarItem from "./agregarItem";
import { Routes, Route } from "react-router";


export default function Fusion() {

    {/*
        <AgregarItem setProducts={setProducts} products={products}></AgregarItem>
        <Catlog products={products} onClick={agregar}></Catlog>
        <Carrito products={productsInCar} onClick={eliminar}></Carrito>
    
    */}

    return (
        <div>

            <Routes>
                <Route path='/agregar' element={<AgregarItem ></AgregarItem>}/>
                <Route path='/' element={<Catlog></Catlog>}/>
                <Route path='/carrito' element={<Carrito></Carrito>}/>
            </Routes>
        </div>
    )
}
import React from "react";
import Carrito from "./carrito";
import Catlog from "./Catlog";
import camara from '../assets/camara.jpg';
import lente from '../assets/lente.jpg';
import micro from '../assets/micro.jpg';
import tripie from '../assets/tripie.jpg';
import correa from '../assets/correa.jpg';
import { useState } from 'react';

export default function Fusion() {



    const [products, setProducts] = useState([
        { nombre: "CAMARA", descripcion: "Camara profesional aca bien aca", src: camara, cantidad: 4, id: 1 },
        { nombre: "LENTE", descripcion: "Lente que lentea", src: lente, cantidad: 4, id: 2 },
        { nombre: "MICRO", descripcion: "No se que es xd", src: micro, cantidad: 4, id: 3 },
        { nombre: "TRIPIE", descripcion: "pa poner la camarita", src: tripie, cantidad: 4, id: 4 },
        { nombre: "CORREA", descripcion: "pa colgarte la camarita", src: correa, cantidad: 4, id: 5 },
    ])

    const agregar = (id) => {
        const productsCopy=[...products] //copia de todo el pinchi arreglo de products

        const product=productsCopy.find((productFind)=>(productFind.id==id))

        const productsInCarCopy=[...productsInCar, product]

        setProductInCar(productsInCarCopy)

    }

    const eliminar = (id) => {

    }

    const [productsInCar, setProductInCar] = useState([])

    return (
        <div>
            <Catlog products={products} onClick={agregar}></Catlog>
            <Carrito products={productsInCar}></Carrito>
        </div>
    )
}
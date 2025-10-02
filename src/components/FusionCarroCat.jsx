import React from "react";
import Carrito from "./carrito";
import Catlog from "./Catlog";
import AgregarItem from "./agregarItem";
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

    const [productsInCar, setProductsInCar] = useState([])

    const agregar = (id) => {

        /*ENCUENCTRA EL ELEMENTO AL QUE SE LE DIÓ CLICK*/
        const productsCopy = [...products] //copia de todo el pinchi arreglo de products

        const product = productsCopy.find((productFind) => (productFind.id == id))

        //Agregar elemento cuando el carrito esta vacío
        if (productsInCar.length < 1) {

            const productsInCarCopy = [...productsInCar, { ...product, cantidad: 1 }]
            setProductsInCar(productsInCarCopy)

            //Resta la cantidad al catalogo
            productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
            setProducts(productsCopy)
        }

        //Agregar elemento cuando el carrito no esta vacío
        else {

            const productInCar = productsInCar.find((prod) => (prod.id == id))
            const productsInCarCopy = [...productsInCar]

            if (productInCar) {
                //Resta cantidad en catalogo
                productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
                setProducts(productsCopy)

                //Suma cantidad en carrito
                productsInCarCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad + 1 : prod))
                setProductsInCar(productsInCarCopy)
            }

            else {
                productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
                setProducts(productsCopy)

                const productsInCarCopy = [...productsInCar, { ...product, cantidad: 1 }]
                setProductsInCar(productsInCarCopy)

            }

        }

    }

    const eliminar = (id) => {
        const productsInCarCopy = [...productsInCar]
        const productsCopy = products.find((prod) => (prod.id == id))

        setProductsInCar(productsInCarCopy.filter((prod) => (prod.id != id)))

        productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad + productsInCarCopy.cantidad : prod))
        setProducts(productsCopy)


    }



    return (
        <div>
            <AgregarItem></AgregarItem>
            <Catlog products={products} onClick={agregar}></Catlog>
            <Carrito products={productsInCar} onClick={eliminar}></Carrito>
        </div>
    )
}
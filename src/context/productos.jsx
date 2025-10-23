import React, { Children } from 'react'
import { createContext, useContext, useState }  from 'react'
import camara from '../assets/camara.jpg';
import lente from '../assets/lente.jpg';
import micro from '../assets/micro.jpg';
import tripie from '../assets/tripie.jpg';
import correa from '../assets/correa.jpg';
import { Routes, Route } from "react-router";

//Contexto creado//
const ProductosContext = createContext()

//Crear Provider//
export default function ProductosProvider({ children }) {

    const [tema, setTema] = useState("dark")

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

            if (product.cantidad > 0) {
                const productsInCarCopy = [...productsInCar, { ...product, cantidad: 1 }]
                setProductsInCar(productsInCarCopy)

                //Resta la cantidad al catalogo
                productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
                setProducts(productsCopy)
            }

            else {
                console.log("Hasta aquí")
            }
        }

        //Agregar elemento cuando el carrito no esta vacío
        else {

            const productInCar = productsInCar.find((prod) => (prod.id == id))
            const productsInCarCopy = [...productsInCar]

            if (productInCar) {
                if (product.cantidad > 0) {
                    //Resta cantidad en catalogo
                    productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
                    setProducts(productsCopy)

                    //Suma cantidad en carrito
                    productsInCarCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad + 1 : prod))
                    setProductsInCar(productsInCarCopy)
                }

                else {
                    console.log("Hasta aquí")
                }

            }

            else {
                if (product.cantidad > 0) {
                    productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad - 1 : prod))
                    setProducts(productsCopy)

                    const productsInCarCopy = [...productsInCar, { ...product, cantidad: 1 }]
                    setProductsInCar(productsInCarCopy)
                }

                else {
                    console.log("Hasta aquí")
                }


            }

        }

    }

    const eliminar = (id) => {
        const productsInCarCopy = [...productsInCar]
        
        
        setProductsInCar(productsInCarCopy.filter((prod) => (prod.id != id)))
        
        const product = productsInCar.find((prod) => (prod.id == id))
        const productsCopy=[...products]
        productsCopy.map((prod)=>(prod.id==id? prod.cantidad=prod.cantidad+product.cantidad:prod))
        
        setProducts(productsCopy)
        

        

        //productsCopy.map((prod) => (prod.id == id ? prod.cantidad = prod.cantidad + productsInCarCopy.length : prod))
        //setProducts(productsCopy)

    }

    return (
        <ProductosContext.Provider value={{ tema, setTema, products, productsInCar, setProducts, eliminar, agregar }}>
            {children}
        </ProductosContext.Provider>
    )
}

//Crear Hook//
export function useProductos(){
    return useContext(ProductosContext)
}

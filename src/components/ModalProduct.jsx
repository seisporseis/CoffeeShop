import { useState } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { moneyFormat } from "../helpers";

export default function ModalProduct() {

    const { product, handleClickModal, handleAgregarPedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

    return (
        <div className="md:flex gap-10 rounded-md items-center">
            <div className="md:w-1/3">
                <img 
                    alt={`Imagen del producto ${product.nombre}`} 
                    src={`/img/${product.imagen}.jpg`} 
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button type="button" onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                <h1 className="mt-5 font-bold text-2xl">{product.nombre}</h1>
                <p className="text-amber-500 font-bold text-3xl">{moneyFormat(product.precio)}</p>
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad <= 1) return
                            setCantidad(cantidad - 1);
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p>{cantidad}</p>
                    <button 
                        type="button"
                        onClick={() => {
                            if(cantidad >= 5) return
                            setCantidad(cantidad + 1);
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <button 
                    type="button"
                    onClick={() => {
                        handleAgregarPedido({...product, cantidad})
                        handleClickModal()
                    }}
                    className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white shadow px-5 py-2 mt-5 font-semibold"
                    >
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}

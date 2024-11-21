import { categories } from "../data/categories"
import { moneyFormat } from "../helpers"

export default function Product({product}) {

    const {nombre, precio, imagen} = product
   
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md bg-white p-2 cursor-pointer">
        <img 
            src={`/img/${imagen}.jpg`} 
            alt={`imagen ${nombre}`}
            className="w-full rounded-md" />
        <div className="flex justify-between items-center py-5">
            <h3 className="font-bold text-sm">{nombre}</h3>
            <p className="text-amber-500 font-bold text-xl">{moneyFormat(precio)}</p>
        </div>
        <button 
            type="button"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white shadow w-full p-2 font-semibold">
            Agregar
        </button>
    </div>
  )
}

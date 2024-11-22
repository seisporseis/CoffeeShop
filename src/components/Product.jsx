import { categories } from "../data/categories"
import { moneyFormat } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Product({product}) {

    const {nombre, precio, imagen} = product
    const { handleClickModal, handleSetProduct } = useQuiosco();
   
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md bg-white p-2 cursor-pointer">
        <img 
            src={`/img/${imagen}.jpg`} 
            alt={`imagen ${nombre}`}
            className="w-full rounded-md" />
        <div className="py-5">
            <h3 className="font-bold text-lg">{nombre}</h3>
            <p className="text-amber-500 font-bold text-xl pt-5">{moneyFormat(precio)}</p>
        </div>
        <button 
            type="button"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white shadow w-full p-2 font-semibold"
            onClick={() => {
                handleClickModal();
                handleSetProduct(product);
            }}>
            Agregar
        </button>
    </div>
  )
}

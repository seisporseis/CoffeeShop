import { moneyFormat } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProduct from "./ResumenProduct";

export default function Resumen() {

  const { pedido, total } = useQuiosco();
  const verifyOrder = () => pedido.length === 0;

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5 bg-slate-100">
      <h1 className='font-bold text-2xl mt-6'>Mi pedido</h1>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="font-lg text-gray-800 font-thin text-center">No hay pedido</p>
        ) : (
          pedido.map(product => (
            <ResumenProduct
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {''}
        {moneyFormat(total)}
      </p>
      <form className="w-full" action="">
        <div className="mt-5">
          <input 
            type="submit" 
            value="Confirmar pedido" 
            className={`${verifyOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} rounded-lg w-full text-white shadow px-5 py-2 mt-5 font-semibold`}
            disabled={verifyOrder()}/>
        </div>
        
      </form>

    </aside>
  )
}

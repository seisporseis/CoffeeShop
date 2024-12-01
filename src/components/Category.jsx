import useQuiosco from "../hooks/useQuiosco"

export default function Category({category}) {
    const {handleClickCategory, currentCategory} = useQuiosco();
    const {icono, nombre, id} = category   
  return (
    <div className={`${currentCategory.id === id ? "bg-yellow-400" : "bg-white"} flex items-center gap-4 border-b border-yellow-300 w-full p-3 hover:bg-yellow-400 cursor-pointer`}>
        <img 
          src={`/img/icono_${icono}.svg`} 
          alt="icono de categoría"
          className="w-8" />
        <button
          type="button"
          onClick={() => handleClickCategory(id)} 
          className="truncate font-black text-sm">
          {nombre}
        </button>
    </div>
  )
}

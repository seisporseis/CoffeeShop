import useQuiosco from "../hooks/useQuiosco"

export default function Category({category}) {
    const {handleClickCategory, currentCategory} = useQuiosco();
    const {icono, nombre, id} = category   
  return (
    <div className={`${currentCategory.id === id ? "bg-yellow-400" : "bg-white"} flex items-center gap-4 border-b w-full p-3 hover:bg-yellow-400 cursor-pointer`}>
        <img 
            src={`/img/icono_${icono}.svg`} 
            alt="icono de categoría"
            className="w-12" />
        <button
          type="button"
          onClick={() => handleClickCategory(id)} 
          className="truncate font-bold text-lg">
          {nombre}
        </button>
    </div>
  )
}

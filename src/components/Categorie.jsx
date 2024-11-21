
export default function Categorie({categorie}) {
    const {icono, nombre, id} = categorie   
  return (
    <div className="flex items-center gap-4 border-b  w-full p-3 hover:bg-yellow-400 cursor-pointer">
        <img 
            src={`/img/icono_${icono}.svg`} 
            alt="icono de categoría"
            className="w-12" />
        <p className="truncate font-bold text-lg">{nombre}</p>
    </div>
  )
}

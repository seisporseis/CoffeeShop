import Categorie from './Categorie'
import useQuiosco from '../hooks/useQuiosco'

export default function Sidebar() {

    const {categories} = useQuiosco();
    return (
        <aside className="w-72">
            <div className="p-4">
                <img
                className="w-40"
                src="/img/logo.svg" 
                alt="" />
            </div>
            <div className="mt-10">
                {categories.map(categorie => (
                    <Categorie
                        key={categorie.id}
                        categorie={categorie} 
                    />
                ))}
            </div>
            <div className='my-5 p-5'>
                <button 
                    type="button"
                    className='border border-red-600 hover:bg-red-600 hover:border-red-600 w-full text-red-600 hover:text-white p-3'>
                    Cancelar orden
                </button>
            </div>
        </aside>
    )
}

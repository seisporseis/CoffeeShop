import Category from './Category'
import useQuiosco from '../hooks/useQuiosco'

export default function Sidebar() {

    const {categories} = useQuiosco();
    return (
        <aside className="w-64">
            <div className=" flex py-6 justify-center items-center">
                <img
                className="w-36"
                src="/img/logo.svg" 
                alt="imagen categoria" />
            </div>
            <div className="mt-10">
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category} 
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

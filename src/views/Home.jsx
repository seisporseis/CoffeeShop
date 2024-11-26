import { products as data } from '../data/products'
import Product from '../components/Product'
import useQuiosco from '../hooks/useQuiosco'

export default function Home() {

  const { currentCategory } = useQuiosco()
  const products = data.filter(product => product.category_id === currentCategory.id)

  return (
    <>
      <h1 className='font-bold text-2xl mt-6'>{currentCategory.nombre}</h1>
      <p className='text-sm font-extralight py-3'>Agrega tus favoritos y disfruta de tu pedido</p>
        
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        { products.map(product => (
          <Product
            key={product.imagen} 
            product={product}
          />
        ))}
      </div>
    </>
  )
}

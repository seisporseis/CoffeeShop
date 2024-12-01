import Product from '../components/Product'
import useSWR from 'swr'
import useQuiosco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'



export default function Home() {

  const { currentCategory } = useQuiosco()

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/products').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/products', fetcher, {
    refreshInterval: 1000
  })

  if(isLoading) return 'Loading...';

  const products = data.data.filter(product => product.category_id === currentCategory.id)

  return (
    <>
      <h1 className='font-bold text-2xl mt-6'>{currentCategory.nombre}</h1>
      <p className='text-sm font-extralight py-3'>Agrega tus favoritos y disfruta de tu pedido</p>
        
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
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

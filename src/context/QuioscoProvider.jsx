import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] =useState(0);

  useEffect(() => {
    const newTotal = pedido.reduce((total, product) => (product.precio * product.cantidad) + total, 0)
    setTotal(newTotal)
  }, [pedido]);

  const getCategories = async () => {
      try {
        const {data} = await clienteAxios('/api/categories')
        setCategories(data.data)
        setCurrentCategory(data.data[0])
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    getCategories();
  },[])

  const handleClickCategory = (id) => {
    const category = categories.filter((category) => category.id === id)[0];
    setCurrentCategory(category);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleAgregarPedido = ({ category_id, ...product }) => {
    if (pedido.some((orderState) => orderState.id === product.id)) {
      const updateOrder = pedido.map((orderState) => orderState.id === product.id ? product : orderState);
      setPedido(updateOrder);
      toast.success('Actualizado correctamente')
    } else {
      setPedido([...pedido, product]);
      toast.success('Agregado al pedido')
    }
  };

  const handleEditQuantity = id => {
    const productUpdate = pedido.filter(product => product.id === id)[0]
    setProduct(productUpdate)
    setModal(!modal);
  };

  const handleDeleteCartProduct = id => {
    const updateCartOrder = pedido.filter(product => product.id != id)
    setPedido(updateCartOrder);
    toast.success('Se ha eliminado correctamente')
  }

  return (
    <QuioscoContext.Provider
        value={{
            categories,
            currentCategory,
            handleClickCategory,
            modal,
            handleClickModal,
            product,
            handleSetProduct,
            pedido,
            handleAgregarPedido,
            handleEditQuantity,
            handleDeleteCartProduct,
            total
        }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;

import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoriesDB);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [pedido, setPedido] = useState([]);

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

  const handleAgregarPedido = ({ category_id, imagen, ...product }) => {
    if (pedido.some((orderState) => orderState.id === product.id)) {
      const updateOrder = pedido.map((orderState) => orderState.id === product.id ? product : orderState);
      setPedido(updateOrder);
    } else {
      setPedido([...pedido, product]);
    }
  };

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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;

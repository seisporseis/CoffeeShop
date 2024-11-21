import { createContext, useState } from "react"
import { categories as categoriesDB } from '../data/categories'


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [currentCategorie, setCurrentCategorie] = useState(categories[0]);


    return(
        <QuioscoContext.Provider
        value={{
            categories,
            currentCategorie
        }}
        >
           {children} 
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext
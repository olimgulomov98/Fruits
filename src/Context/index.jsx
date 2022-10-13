import { createContext, useState } from "react";

export const FruitsContext = createContext();

const Context = ({children}) => {

    const [state, setState] = useState(
        localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) :
        [
        {id: 1, name: 'Apple', price: '100', quantity: 1},
        {id: 2, name: 'Banana', price: '50', quantity: 1},
        {id: 3, name: 'Apricot', price: '80', quantity: 1},
        {id: 4, name: 'Orange', price: '120', quantity: 1},
        {id: 5, name: 'Mango', price: '200', quantity: 1},
        {id: 6, name: 'Pineapple', price: '150', quantity: 1},
    ])
    localStorage.setItem('data', JSON.stringify(state))
    return(
        <FruitsContext.Provider value={[state, setState]}>
            {children}
        </FruitsContext.Provider>
    )
}
export default Context
import React, {useContext} from "react";
import { FruitsContext } from "../../Context";
import { Item, WrapMain, WrapFooter } from "./style";
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

export const Main = () => {
    const [state, setState] = useContext(FruitsContext)
    var totalCount = 0
    var totalPrice = 0
    
    const plus = (id) => {
        let res = state.map((value) => value.id === id ? {...value, quantity: value.quantity + 1} : value)
        setState(res)
    }
    const minus = (id) => {
        let res = state.map((value) => value.id === id && value.quantity > 1 ? {...value, quantity: value.quantity - 1} : value)
        setState(res)
    }
    return(
        <WrapMain>
        {
            state.map((value) => {
                totalCount += value.quantity
                totalPrice += value.quantity * value.price
                return(
                    <Item key={value.id}>
                        <Item.Title>{value.name}</Item.Title>
                        <Item.Title>${value.price}</Item.Title>
                        <Item.Counter>
                            <AiOutlineLeft onClick={() => minus(value.id)} />
                            <h4>{value.quantity}</h4>
                            <AiOutlineRight onClick={() => plus(value.id)} />
                        </Item.Counter>
                    </Item>
                )
            })
            
        }
        <WrapFooter>
             <h4>Total Price: {totalPrice}</h4>
             <h4>Total Quantity: {totalCount}</h4>
        </WrapFooter>
        
        </WrapMain>   
    )
}
import React, {useContext} from "react";
import { FruitsContext } from "../../Context";
import {Title} from './style'

export const Navbar = () => {
    const [state, setState] = useContext(FruitsContext)
    return(
        <Title>Fruits: {state.length}</Title>
    )
} 
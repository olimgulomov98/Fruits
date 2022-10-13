import React from "react";
import Context from "../Context";
import { Container } from "./style";
import { Navbar } from "../Components/Navbar";
import { Main } from "../Components/Main";

export const Root = () => {
    return(
        <Container>
            <Context>
            <Navbar />
            <Main />
            </Context>
        </Container>
        
    )
}
import styled from "styled-components";

const WrapMain = styled.div`
    width: 100%;
    height: 300px;
`

const Item = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid white;
    padding: 0 5px;
    position: relative;
`

Item.Title = styled.h3`
    color: white;
    font-size: 23px;
    margin-left: 10px;
`
Item.Counter = styled.div`
    width: 80px;
    height: 30px;
    background: white;
    position: absolute;
    right: 5px;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #EC8171;
`
const WrapFooter = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
export {Item, WrapMain, WrapFooter}
import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
export const Image=styled.img`
    height:300px;
    margin:10px;
`
export const InnerContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const HeightContainer=styled.div`
    background-color:black;
    color:white;
    border-radius:10px;
    padding:10px;
    border-color:black;
    margin:10px;
`
export const WeightContainer=styled.div`
    background-color:black;
    color:white;
    border-radius:10px;
    padding:10px;
    border-color:black;
    margin:10px;
`
export const WeightValue=styled.h1`
    text-align:center;
`
export const HeightValue=styled.h1`
    text-align:center;
`
export const Symbols=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
`
export const Result=styled.div`
     background-color:black;
    color:white;
    border-radius:10px;
    padding:10px;
    border-color:black;
`
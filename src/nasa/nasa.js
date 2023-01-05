import React from "react";
import styled from "styled-components";

const SCBaslık = styled.h1`
  font-size: 50px;
  background-color: #282c34;
  color:white;
  letter-spacing: 2px;
  padding: 10px;

`
const SCMain = styled.div`
  display: flex;
  justify-content: space-between;

`

const SCİmg = styled.img`
 width: 50%;
  border-radius: 20px;
  background-size: cover;
  border:2px solid black ;
`

const SCParafDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  text-align: center;
  border-radius:20px;
  padding: 5px;
`

const  SCAciklama = styled.p`
letter-spacing: 2px;
`

const SCCopyright = styled.p`
  border: 5px solid grey;
  color:black;
  font-weight: bold;
`



export default function Nasa(props) {
const {data,dateChanger} = props;
return (

<>
    <SCBaslık>{data.title}</SCBaslık>
    <SCMain className="main">
        <SCİmg src={data.url} alt={data.title}/>
        <SCParafDiv className="paragraf">
            <SCAciklama className="aciklama">{data.explanation}</SCAciklama>
            <SCCopyright className="copyright">{data.copyright}</SCCopyright>
        </SCParafDiv>
    </SCMain>
    
    




</> 


)



}
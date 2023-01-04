import React from "react";

export default function Tarih (props){
    const {changer} = props;

    return(
         <input type="date" onChange={(event) => changer(event.target.value)}></input>
    )
}
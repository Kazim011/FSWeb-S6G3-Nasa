import React from "react";


export default function Nasa(props) {
const {data,dateChanger} = props;
return (

<>
    <h1>{data.title}</h1>
    <div className="main">
        <img src={data.url} alt={data.title}/>
        <div className="paragraf">
            <p className="aciklama">{data.explanation}</p>
            <p className="copyright">{data.copyright}</p>
        </div>
    </div>
    
    




</> 


)



}
import React, { useEffect, useState } from "react";
import "./App.css";
import Nasa from "./nasa/nasa";
import { dummyData } from "./dummy";
import axios from "axios";
import Tarih from "./tarih";


function App() {
  const [data , setData] = useState(dummyData);
  const [tarih, setTarih] = useState(null);
  
  useEffect (() => {
   axios
   .get("https://api.nasa.gov/planetary/apod?api_key=RT0hX4H7fzLzr1epgKdyzD4TeYtO5AIHg0kNO9BU&date="+tarih)
   .then((response) => setData(response.data))
  },[tarih])

  function dateChanger(tarih){
    let gun = new Date (tarih);
    let gercekTarih = `${gun.getFullYear()}-${gun.getMonth()+1}-${gun.getDate()}`
    setTarih(gercekTarih);}
  return (
    <div className="App">
      <Tarih changer = {dateChanger}/>
      <Nasa data = {data} />
     
    </div>
  );
}

export default App;

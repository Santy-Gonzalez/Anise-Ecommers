import React, {useEffect, useState} from "react";
import Main from './Main';

const MainContainer = () => {

  const [rings, setRings] = useState([]);

  useEffect(() => {
      fetch("/public/Products.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRings(data.filter(ring => ring.id === 1 || ring.id === 2)); 
      })
  }, []);



  return (
    <>
     <Main rings = {rings}/> 
    </>
  )
}

export default MainContainer

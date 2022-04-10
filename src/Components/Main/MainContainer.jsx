import React, {useEffect, useState} from "react";
import Main from './Main'
import Products from '../Json/Products.json'

const MainContainer = () => {

  const [rings, setRings] = useState([]);

  useEffect(() => {
      fetch("../Json/Products.json")
      .then(response => response.json())
      .then(data => {
        setRings(data); 
      })
  }, []);

  const ring = rings.filter(ring => ring.id === 1 || ring.id === 2);

  return (
    <>
      <Main
       ring = {ring}
      />
    </>
  )
}

export default MainContainer

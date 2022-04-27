import React, {useEffect, useState} from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import Main from './Main';

const MainContainer = () => {

  const [rings, setRings] = useState([]);

  useEffect(()=>{
    const db = getFirestore();
    const advance = doc(db, 'Products', 'D9HAV8Cr3huiohlbthQ9');

    getDoc(advance).then((res) => {
      setRings({id: res.id, ...res.data()});
    });

  }, []);
  
  return (
    <>
    <Main rings = {rings} />
    
     <div className={rings.cod}>
        
        <div className='imagee'>
            <img src={rings.imagen} alt="rings" />
        </div>

        <div className='name'>
            <div>{rings.nombre}</div>
        </div>

        <div className='price'>
            <div>{rings.precio}</div>
        </div>
        </div>
    </>
  )
}

export default MainContainer

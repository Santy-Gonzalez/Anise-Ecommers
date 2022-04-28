import React, {useEffect, useState} from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import CircleLoader from "react-spinners/CircleLoader";
import Main from './Main';

const MainContainer = () => {

  const [rings, setRings] = useState([]);
  const [ringsTwo, setRingsTwo] = useState([]);

  const [loading, setLoading] = useState(false);

  const spinnerTempleate = (
    <div className="sweet-loading">
      <CircleLoader size={150} color={"#000"} loading={loading} speedMultiplier={1.5} />
    </div>
  )

  useEffect(()=>{
    setLoading(true);
    const db = getFirestore();
    const advance = doc(db, 'Products', 'D9HAV8Cr3huiohlbthQ9');
    const advanceTwo = doc(db, 'Products', '9ct7IUyLtFI98kjccpJn');

    getDoc(advance).then((res) => {
      setRings({id: res.id, ...res.data()});
    });

    getDoc(advanceTwo).then((res) => {
      setRingsTwo({id: res.id, ...res.data()});
    });

    //Ocultamos el spinner
    setLoading(false)

  }, []);

  return (
    <>
      {loading ? spinnerTempleate : <Main rings = {rings} ringsTwo = {ringsTwo}/>}
    </>
  )
}

export default MainContainer

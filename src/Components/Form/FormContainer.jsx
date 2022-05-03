import React, { useState, useContext, useEffect } from 'react'
import Form from './Form';
import { CartContext } from "../../Context/CartContextProvider";
import { getFirestore, collection, doc} from "firebase/firestore";
import "./styleForm.css";

const FormContainer = () => {

    const {price, cart} = useContext(CartContext);
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [order, setDoc] = useState();

    const createOrder = () => {
        const order = {
            buyer: {
                name,
                lastname,
                email,
                phone,
            },
            items: cart,
            total: price,
        };
        console.log(order);

        (async function () {
            const db = getFirestore();
            const newOrderRef = doc(collection(db,'orders'))
            await setDoc(newOrderRef, order);
            return newOrderRef
        })()

    }

  return (
    <>
        <Form 
            name={name} setName = {setName} 
            lastname={lastname} setLastname = {setLastname}
            email={email} setEmail = {setEmail}
            phone={phone} setPhone = {setPhone}
            createOrder = {createOrder}
        />
    </>
  )
}

export default FormContainer

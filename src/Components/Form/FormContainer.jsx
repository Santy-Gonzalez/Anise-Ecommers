import React, { useState, useContext, useEffect } from 'react'
import Form from './Form';
import { CartContext } from "../../Context/CartContextProvider";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import "./styleForm.css";

const FormContainer = () => {

    const {price, cart} = useContext(CartContext);
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [order, setOrderId] = useState();
    
    const createOrder = () => {

        const db = getFirestore();
        const salesRef = collection(db, "sales");

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

        addDoc(salesRef, order).then(({id})=>{
            setOrderId(id);
        });
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

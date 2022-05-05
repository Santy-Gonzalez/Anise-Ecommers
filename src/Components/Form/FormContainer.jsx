import React, { useState, useContext, useEffect } from 'react';
import Form from './Form';
import { CartContext } from "../../Context/CartContextProvider";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/firestore";
import {Link} from 'react-router-dom';
import "./styleForm.css";

const FormContainer = () => {

    const {price, cart} = useContext(CartContext);
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [orderId, setOrderId] = useState("codigos");
    const [buy, setBuy] = useState(false)
    const [product, setProduct] = useState([]);
    const db = getFirestore();
    
    const createOrder = () => {

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

        addDoc(salesRef, order).then(({id})=>{
            setOrderId(id);
            setBuy(true);
        });
    }

    useEffect(()=>{
        const db = getFirestore();
        const products = doc(db, "sales", orderId);

        getDoc(products).then((res) => {
            setProduct({id: res.id, ...res.data()});
        }); 
    }, [orderId])

    const handleClick = () =>{
        setBuy(false);
    }

  return (
    <>  
        {buy ?
            <div className='backForm'>
                <div className='gridThanks'>
                    <div className='thanks'>
                        <p>Muchas gracias por su compra</p>
                    </div>
                    <div className='codeForm'>
                        <p>tu codigo de compra es:</p>
                    </div>
                    <div className='purchaseCode'>
                        <p>{orderId}</p>
                    </div>
                </div>

                    <div className='productsForm'>
                        <div className='cardForm'>
                            {product?.items?.map((item)=>(
                                <div className='cardsForm'>
                                    <div className='imageForm'>
                                        <div className='imageFormSize'>
                                            <img src={item.imagen} alt="ring" />
                                        </div>
                                    </div>
                                
                                    <div className='dataForm'>
                                        <div className='nameForm'><p>{item.nombre}</p></div>
                                        <div className='priceForm'><p>€ {item.precio}.00</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='containerData'>
                            <div className='dataPersonForm'>

                                <div className='dataFormBuyer'>
                                    <p>Datos del comprador</p>
                                </div>

                                <div className='centerFormMain'>
                                    <div className='firstColumn'>
                                        <div className='nameFromGrid'>Nombre:</div>
                                        <div className='lastnameFormGrid'>Apellido:</div>
                                        <div className='phoneFormGrid'>Telefono:</div>
                                        <div className='emailFormGrid'>E-Mail:</div>
                                    </div>

                                    <div className='secondColumn'>
                                        <div className='NameFromGrid'>{product?.buyer?.name}</div>
                                        <div className='LastnameFormGrid'>{product?.buyer?.lastname}</div>
                                        <div className='PhoneFormGrid'>{product?.buyer?.phone}</div>
                                        <div className='EmailFormGrid'>{product?.buyer?.email}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                <div className='buttonContinue'>
                   <Link to={'/ItemListContainer'}><button onClick={()=>{handleClick()}}>Seguir comprando</button></Link> 
                </div>
            </div> 
            :
            <Form 
                name={name} setName = {setName} 
                lastname={lastname} setLastname = {setLastname}
                email={email} setEmail = {setEmail}
                phone={phone} setPhone = {setPhone}
                createOrder = {createOrder}
            />
        
        }
    </>
  )
}

export default FormContainer

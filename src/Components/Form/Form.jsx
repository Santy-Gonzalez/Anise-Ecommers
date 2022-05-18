import React, {useEffect, useContext} from 'react';
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid, Button } from '@material-ui/core';
import { CartContext } from "../../Context/CartContextProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styleForm.css";

const Form = ({name, lastname, email, phone, createOrder, setName, setLastname, setEmail, setPhone}) => {

    useEffect(()=>{
        Aos.init({duration:1500});
    },[])

    const { clear} = useContext(CartContext);

    const handleClick = () =>{
        createOrder()
        clear();
    }

  return (
    <div className='backForm'>
        <Container className='spaceForm' sx={{ width: 1 }}>
            <Grid item md={12} className='spaceForm'>
                <form data-aos="zoom-in">
                    <Grid className="spaceGrid">
                        <FormControl>
                            <InputLabel htmlFor='Nombre'>Nombre</InputLabel>
                            <Input id='name' type='text'aria-describedby='nombre-helper' value={name} onChange={(e)=>{setName(e.currentTarget.value)}} required/>
                            <FormHelperText id='name-helper'>Tu nombre </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid">
                        <FormControl>
                            <InputLabel htmlFor='Apellido'>Apellido</InputLabel>
                            <Input id='lastname' type='text'aria-describedby='lastname-helper' value={lastname} onChange={(e)=>{setLastname(e.currentTarget.value)}} required/>
                            <FormHelperText id='lastname-helper'>Tu Apellido </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid">
                        <FormControl>
                            <InputLabel htmlFor='Nombre'>Email</InputLabel>
                            <Input id='email' type='email'aria-describedby='email-helper' value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}} required/>
                            <FormHelperText id='email-helper'>Tu Email </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid">
                        <FormControl>
                            <InputLabel htmlFor='Phone'>Telefono</InputLabel>
                            <Input id='phone' type='number'aria-describedby='phone-helper' value={phone} onChange={(e)=>{setPhone(e.currentTarget.value)}} required/>
                            <FormHelperText id='phone-helper'>Tu Telefono </FormHelperText>
                        </FormControl>
                    </Grid>
                    <div className="spaceGridButton">
                        <Button onClick={() => {handleClick()}} type='button' variant='contained' color='default'>Enviar pedido</Button>
                    </div>
                </form>
            </Grid>
        </Container>
    </div>
  )
}

export default Form

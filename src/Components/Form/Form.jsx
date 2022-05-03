import React from 'react';
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid, Button } from '@material-ui/core';
import "./styleForm.css";

const Form = ({name, lastname, email, phone, createOrder, setName, setLastname, setEmail, setPhone}) => {

  return (
    <div className='backForm'>
        <Container className='spaceForm' sx={{ width: 1 }}>
            <Grid className='spaceForm'>
                <form>
                    <Grid className="spaceGrid" item md={12}>
                        <FormControl>
                            <InputLabel htmlFor='Nombre'>Nombre</InputLabel>
                            <Input id='name' type='text'aria-describedby='nombre-helper' value={name} onChange={(e)=>{setName(e.currentTarget.value)}} required/>
                            <FormHelperText id='name-helper'>Tu nombre </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid" item md={12}>
                        <FormControl>
                            <InputLabel htmlFor='Apellido'>Apellido</InputLabel>
                            <Input id='lastname' type='text'aria-describedby='lastname-helper' value={lastname} onChange={(e)=>{setLastname(e.currentTarget.value)}} required/>
                            <FormHelperText id='lastname-helper'>Tu Apellido </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid" item md={12}>
                        <FormControl>
                            <InputLabel htmlFor='Nombre'>Email</InputLabel>
                            <Input id='email' type='email'aria-describedby='email-helper' value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}} required/>
                            <FormHelperText id='email-helper'>Tu Email </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid className="spaceGrid" item md={12}>
                        <FormControl>
                            <InputLabel htmlFor='Phone'>Telefono</InputLabel>
                            <Input id='phone' type='number'aria-describedby='phone-helper' value={phone} onChange={(e)=>{setPhone(e.currentTarget.value)}} required/>
                            <FormHelperText id='phone-helper'>Tu Telefono </FormHelperText>
                        </FormControl>
                    </Grid>
                    <div className="spaceGridButton" item md={12}>
                        <Button onClick={() => {createOrder()}} type='submit' variant='contained' color='success'>Enviar pedido</Button>
                    </div>
                </form>
            </Grid>
        </Container>
    </div>
  )
}

export default Form

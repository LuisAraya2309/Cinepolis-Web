import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useLocation} from "react-router-dom"
import { PrincipalCard } from '../GeneralResources/PrincipalCard'
import { DeleteCreditCard } from './DeleteCreditCard'

export function ManageCreditCardPage() {

  const {state} = useLocation();
  const clientEmail = state.userLogged;
  console.log(clientEmail);
  
  return (
    <Fragment>
        <header className="App-header">
                
            <div className='container mx-auto'>
                <h1 className='text-center'>Gestión de métodos de pago</h1>
                <br/>
                <div className="row row-cols-2 row-cols-md-2 g-2">
                    
                    <PrincipalCard props={{title:"Agregar un método de pago",buttonTitle:"Agregar",redirectLink:"/CreateCreditCard",params:clientEmail}} />

                    <DeleteCreditCard props={{title:"Eliminar un método de pago", clientEmail:clientEmail}} />

                </div>
                
            </div>
                       
        </header>
    </Fragment>
  )
}
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ValidarDatos } from '../../Helpers/ValidarDatos'
import {Navigate} from 'react-router-dom'
import { generarOrden } from '../../Firebase/generarOrden'
import  { Formik}  from 'formik'
import * as Yup from 'yup'
import './Formulario.css'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'Demasiado corto')
                .max(20, 'Demaisado largo'),
    apellido: Yup.string()            
                .required('Este campo es obligatorio')
                .min(4, 'Demasiado corto')
                .max(20, 'Demaisado largo'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Email invalido')
                .oneOf([Yup.ref('emailConfirm')],'Los E-mails no coinciden'),
    emailConfirm: Yup.string()
                .required('Este campo es obligatorio')
                .email('Email invalido')
                .oneOf([Yup.ref('email')],'Los E-mails no coinciden')
})


export const Checkout = () => {
    
    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const initialValues = {
        nombre:'',
        apellido:'',
        email:'',
        emailConfirm:''
    }
  
        return (
            <>
            {carrito.length === 0 
                ? <Navigate to='/'/>
                :
                <div className='container my-5'>
                        <h2>Resumen de compra</h2>
                        <hr/>

                        <Formik 
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values)=>{
                                if (!ValidarDatos(values)) { return }

                                generarOrden(values, carrito, totalCompra, vaciarCarrito)
                            }}
                            >
                            {(formik)=>(
                                <form className='formulario' onSubmit={formik.handleSubmit}>
                                <label htmlFor='nombre'>Nombre</label>
                                <input 
                                    onChange={formik.handleChange}
                                    value={formik.values.nombre}
                                    onBlur={formik.handleBlur}
                                    name='nombre'
                                    className='form-control my-2'
                                    type='text'
                                    placeholder='Jhon'
                                />
                                {formik.errors.nombre && <small className='error'>{formik.errors.nombre}</small>}
                                <label htmlFor='apellido'>Apellido</label>
                                <input 
                                    onChange={formik.handleChange}
                                    value={formik.values.apellido}
                                    onBlur={formik.handleBlur}
                                    name='apellido'
                                    className='form-control my-2'
                                    type='text'
                                    placeholder='Doe'
                                />
                                {formik.errors.apellido && <small className='error'>{formik.errors.apellido}</small>}
                                <label htmlFor='e-mail'>E-mail</label>
                                <input 
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    name='email'
                                    className='form-control my-2'
                                    type='email'
                                    placeholder='jhonDoe@mail.com'
                                />
                                {formik.errors.email && <small className='error'>{formik.errors.email}</small>}
                                <label htmlFor='emailConfirm'>Comfirme E-mail</label>
                                <input 
                                    onChange={formik.handleChange}
                                    value={formik.values.emailConfirm}
                                    onBlur={formik.handleBlur}
                                    name='emailConfirm'
                                    className='form-control my-2'
                                    type='email'
                                    placeholder='Repita su e-mail'
                                />
                                {formik.errors.emailConfirm &&  <small className='error'>{formik.errors.emailConfirm}</small>}
                                <button type='submit' className='btn btn-primary'>Enviar</button>
                            </form>  
                            )}
                        </Formik>                  
                </div>
            }
            </>
        )
        }



     // carrito.forEach((prod) =>{
        //     const docRef = doc(productosRef, prod.id)
            
        //     getDoc(docRef)
        //         .then((doc) =>{
        //             updateDoc(doc.ref, {
        //                 stock: doc.data().stock - prod.cantidad
        //             })
        //         }) 
        // })
        

          // const handleInputChange = (e) => {
    //     // console.log(e.target.value) 
    //     setValues({
    //       ...values,
    //       [e.target.name]: e.target.value
    //     })
    // }    
    
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //    if (!ValidarDatos(values)) { return }

    //    generarOrden(values, carrito, totalCompra, vaciarCarrito)

        // console.log(orden)
    // }
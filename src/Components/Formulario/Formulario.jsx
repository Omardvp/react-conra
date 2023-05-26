import React, { useState } from 'react'


export const Formulario = () => {
  
  const [values, setValues] = useState({
      nombre:'',
      apellido:'',
      email:''
  })

  const handleInputChange = (e) => {
      console.log(e.target.value)
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  
    return (
    <form className='container my-5' onSubmit={handleSubmit}>
        <input 
            onChange={handleInputChange}
            value={values.nombre}
            name='nombre'
            className='form-control my-2'
            type='text'
            placeholder='Nombre'
        />
        {values.nombre.length < 4 && <small>Nombre invalido</small>}
        <input 
            onChange={handleInputChange}
            value={values.apellido}
            name='apellido'
            className='form-control my-2'
            type='text'
            placeholder='Apellido'
        />
        {values.apellido.length < 4 && <small>Apellido invalido</small>}
        <input 
            onChange={handleInputChange}
            value={values.email}
            name='email'
            className='form-control my-2'
            type='email'
            placeholder='E-mail'
        />
        {values.email.length < 4 && <small>E-Mail invalido</small>}
        <button type='submit' className='btn btn-primary'>Enviar</button>
    </form>
  )
}

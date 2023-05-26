

export const Homeview = ({saludo, texto}) => {
    // console.log(props.saludo)
    // console.log(props.texto)
    
    // const {saludo, texto} = props

    return ( <center>
        <h2>{saludo}</h2>
        <hr/>
        <p>{texto}</p>
    </center>
    )
}
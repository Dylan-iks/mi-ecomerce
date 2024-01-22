import { useForm } from "react-hook-form"
import "./contacto.css"

const Contacto = () => {

   const { register, handleSubmit } = useForm();

   const enviar = (data) => {
    console.log(data);
   }
  
    return (
    
    <div className='formulario'>
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")}/>
            
            <input  type="email" placeholder='ingresá tu email' {...register("email")}/>
            
            <button type='submit'>Enviar</button>
        </form>
    </div>
  
  )
}

export default Contacto
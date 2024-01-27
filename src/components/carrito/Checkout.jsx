
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/config'
import { Link } from "react-router-dom";
import Form from "./Form";
import Swal from 'sweetalert2';
import "./formulario.css"



const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: ""
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: precioTotal(),
      };
  
      subirOrden(orden);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los correos electrónicos deben ser iguales',
      });
    }
  };
  

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id)
      
      vaciarCarrito()
    });
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="orden">
          <h2>Orden Generada correctamente!!</h2>
          <p>N° de orden: {idOrden} </p>
          <Link className="boton-orden" to="/">Ver mas productos</Link>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrder={enviarOrder}
        />
      )}
    </div>
  );
};
export default Checkout;



  
import "./form.css";
import { useContext, useState } from "react";
import { cartContext } from '../../src/context/CartContext'
import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const Form = () => {
  const { cart, deleteAll, totalPrecio, totalProductos } = useContext(cartContext);
  const [form, setform] = useState({
    nombre: "",
    email: "",
    phone: "",
    address: "",
  });
  const order = {
    buyer: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
    },
    items: cart.map((item) => ({
      id: item.id,
      title: item.title,
      precio: item.price,
      stock: item.stock,
    })),
    totalProductos: totalProductos(),
    totalPrecio: totalPrecio(),
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      modalBasico(id);
    });
  }
  const handleSubmit = (e) => {
    handleClick();
    deleteAll();
  };

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name || ""]: e.target.value,
    });
  };
   const modalBasico = (id) => {
    Swal.fire({
      title: "Gracias por su compra!",
      text: `Su orden: (${id})`,
      icon: "success",
      confirmButtonText: "OK",
    }); 
  };
  return (
    <>
      <h1 className="titulo-formulario">Terminar compra</h1>
      <form className="formulario">
        <label className="formulario-label" htmlFor="name">
          Nombre y Apellido
        </label>
        <input
          className="formulario-input"
          type="text"
          name="name"
          placeholder="Nombre Completo"
          required={true}
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="formulario-label">
          Email
        </label>
        <input
          className="formulario-input"
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
          required={true}
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="phone" className="formulario-label">
          Teléfono
        </label>
        <input
          className="formulario-input"
          type="phone"
          name="phone"
          minLength={10}
          maxLength={17}
          placeholder="+54 9 11 22222222"
          required={true}
          value={form.phone}
          onChange={handleChange}
        />

        <label htmlFor="address" className="formulario-label">
          Dirección
        </label>
        <input
          className="formulario-input"
          type="text"
          name="address"
          placeholder="direccion de su domicilio"
          required={true}
          value={form.address}
          onChange={handleChange}/>
          <p>Presione "COMPRAR" para generar su orden</p>
        <button className="btn-form" type="submit" onClick={handleSubmit}>
          <Link to="/">Comprar</Link>
        </button>
      </form>
    </>
  );
};
export default Form;
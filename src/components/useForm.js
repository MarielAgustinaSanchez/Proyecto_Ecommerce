import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { cartContext } from '../context/CartContext';

export const useForm = (initialForm, validateForm) => {
  const { cart, deleteAll, totalPrecio, totalProductos } = useContext(cartContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

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

  const modalBasico = (id) => {
    Swal.fire({
      title: "Gracias por su compra!",
      text: `Su orden: (${id})`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      handleClick();
      deleteAll();
    } else {
      console.log("error");
    }
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      modalBasico(id);
    });
  }

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
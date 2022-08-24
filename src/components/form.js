import "./form.css";
import { Link } from "react-router-dom";
import { useForm } from "./useForm";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const validateForm = (form) => {
  const errors = {};
  if (!form.name.trim()) {
    errors.name = "El nombre es requerido";
  }
  if (!form.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
    errors.email = "El email no es válido";
  }
  if (!form.phone) {
    errors.phone = "El teléfono es requerido";
  } else if (form.phone.length < 10 || form.phone.length > 17) {
    errors.phone = "El teléfono no es válido";
  }
  if (!form.address.trim()) {
    errors.address = "La dirección es requerida";
  }
  return errors;
};
const Form = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm( initialForm, validateForm);

  return (
    <div>
      <div className="form-container">
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
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <p className="formulario-error">{errors.name}</p>}
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
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className="formulario-error">{errors.email}</p>}
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
            required
            value={form.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.phone && <p className="formulario-error">{errors.phone}</p>}
          <label htmlFor="address" className="formulario-label">
            Dirección
          </label>
          <input
            className="formulario-input"
            type="text"
            name="address"
            placeholder="direccion de su domicilio"
            required
            value={form.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="formulario-error">{errors.address}</p>
          )}
          <p>
          Presione "COMPRAR" para generar su orden
          </p>
          <button type="submit" className="btn-form" onClick={handleSubmit}>
            <Link to="/">Comprar</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
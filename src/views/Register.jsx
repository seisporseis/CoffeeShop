import { createRef ,useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/axios";
import Alert from "../components/Alert";

export default function Register() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation : passwordConfirmationRef.current.value
    } 
    try {
      const {data} = await clienteAxios.post('/api/register', datos)
      console.log(data.token)
    } catch (error) {
      setErrores(Object.values(error.response.data.errors))
    }
  }

  return (
    <>
        <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
        <p className="text-xs font-thin">Rellena con tus datos para crear tu cuenta</p>

        <div className="bg-stone-100 shadow-md rounded-md mt-5 py-10 px-5">
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            { errores ? errores.map(error => <Alert>{error}</Alert>): null }
            <div className="mb-4">
              <label 
                className="font-bold text-stone-950"
                htmlFor="name">
                  Nombre
              </label>

              <input 
                type="text"
                id="name" 
                className="p-3 w-full font-light border rounded-md"
                name="name"
                placeholder="Escribe tu nombre"
                ref={nameRef}
              />
            </div>

            <div className="mb-4">
              <label 
                className="font-bold text-stone-950"
                htmlFor="email">
                  Email
              </label>

              <input 
                type="email"
                id="email" 
                className="p-3 w-full font-light border rounded-md"
                name="email"
                placeholder="Escribe tu correo"
                ref={emailRef}

              />
            </div>

            <div className="mb-4">
              <label 
                className="font-bold text-stone-950"
                htmlFor="password">
                  Password
              </label>

              <input 
                type="password"
                id="password" 
                className="p-3 w-full font-light border rounded-md"
                name="password"
                placeholder="Escribe una password"
                ref={passwordRef}
              />
            </div>

            <div className="mb-4">
              <label 
                className="font-bold text-stone-950"
                htmlFor="password_confirmation">
                  Repetir password
              </label>

              <input 
                type="password"
                id="password_confirmation" 
                className="p-3 w-full font-light border rounded-md"
                name="password_confirmation"
                placeholder="Escribe de nuevo tu password"
                ref={passwordConfirmationRef}
              />
            </div>

            <input 
              type="submit" 
              value="Crear cuenta"
              className="bg-amber-300 hover:bg-amber-400 p-3 mt-5 rounded-full font-bold uppercase w-full cursor-pointer shadow-sm"
              />
          </form>
        </div>
        <nav className="mt-5 text-center cursor-pointer underline text-sm font-light text-slate-600 hover:text-slate-950">
          <Link to="/auth/login">
            Inicia sesión aquí
          </Link>
        </nav>
    </>
  )
}

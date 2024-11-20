import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
    <h1 className="text-2xl font-bold">Ingresa a tu cuenta</h1>
    <p className="text-xs font-thin">Para acceder a tu cuenta escribe tu email y tu password</p>

    <div className="bg-stone-100 shadow-md rounded-md mt-5 py-10 px-5">
      <form action="">
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
          />
        </div>       

        <input 
          type="submit" 
          value="Iniciar sesión"
          className="bg-amber-300 hover:bg-amber-400 p-3 mt-5 rounded-full font-bold uppercase w-full cursor-pointer shadow-sm"
          />
      </form>
    </div>
    <nav className="mt-5 text-center cursor-pointer underline text-sm font-light text-slate-600 hover:text-slate-950">
      <Link to="/auth/register">
        Crear nueva cuenta
      </Link>
    </nav>
</>  
)}


export default function Register() {
  return (
    <>
        <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
        <p className="text-xs font-thin">Rellena con tus datos para crear tu cuenta</p>

        <div className="bg-stone-100 shadow-md rounded-md mt-5 py-10 px-5">
          <form action="">
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
              />
            </div>

            <input 
              type="submit" 
              value="Crear cuenta"
              className="bg-amber-300 hover:bg-amber-400 p-3 rounded-full font-bold w-full cursor-pointer"
              />

          </form>
        </div>
    </>
  )
}

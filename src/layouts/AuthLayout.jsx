import { Outlet } from 'react-router-dom'

export default function AuthLayout() {



  return (
    <main className="flex flex-col md:flex-row max-w-4xl m-auto mt-10 md:mt-28 items-center">
      <img 
        src="../../public/img/logo.svg" 
        alt="logotipo Fresh Coffee"
        className="max-w-xs" />

      <div className="p-10 w-full">
        <Outlet />  
      </div>
    </main>
  )
}

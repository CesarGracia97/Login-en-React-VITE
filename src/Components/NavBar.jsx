import { Link, useNavigate, Outlet, useLocation } from "react-router-dom"

export const NavBar = () => {

  const {state} =useLocation();
  const navigate = useNavigate();

  console.log(state);

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    })
  }

  return (
    <>
      <header>
        <h1>
          <Link rel='/'>Logo</Link>
        </h1>
        {
          state?.logged ? (        
            <div className='user'>
              <span className='username'>{state?.name}</span>
              <button className='btn-logout' onClick={onLogout}>Cerrar Sesion</button>
            </div>
          ):(
            <nav>
              <Link to='/login'>Iniciar Sesion</Link>
              <Link to= 'register'>Registrarse</Link>
            </nav>
          )
        }
      </header>
      <Outlet />
    </>
  )
}
export default NavBar;

import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export default function Navbar({ user }) {
  return (
    <nav>
      <div className="nav-left">
        <Link className="nav-link" to="/">Inicio</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">Hola, {user.displayName}</span>
            <button className="nav-button" onClick={() => signOut(auth)}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">Iniciar sesión</Link>
            <Link className="nav-link" to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}

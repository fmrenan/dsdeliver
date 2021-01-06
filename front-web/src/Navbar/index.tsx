import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

function Navbar(){
  return(
    <nav className="main-navbar">
      <Logo />
      <a href="logo" className="logo-text">Ds Deliver</a>
    </nav>
  )
}

export default Navbar;
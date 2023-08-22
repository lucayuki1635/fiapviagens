import styles from './navbar.module.css';

const NavBar = () => {
    return (
      <nav style={{ backgroundColor: 'transparent', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>FiapViagens</h1>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li><a href="#">Passagens</a></li>
          <li><a href="#">Hotéis</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Agende sua viagem</a></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
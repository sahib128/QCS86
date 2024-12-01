import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ showHomeContact }) => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <div className="logo d-flex align-items-center gap-2" style={{ marginLeft: '-100px' }}>
          <img src={logo} alt="Logo" style={{ height: "100px", width: '130px'}} /> {/* Adjust logo size */}
          <h2 className="mb-0" style={{ fontWeight: 'bold', fontSize: '50px', marginLeft: '-30px' }}>QCs86</h2> {/* Thicker font and larger size */}
        </div>
      </div>
      <ul className='nav-menu'>
        {showHomeContact && (
          <>
            <li>
              <Link className='nav-contact' to="/home">Home</Link> {/* Use Link for navigation */}
            </li>
            <li className='nav-contact'>Contact</li>
          </>
        )}
        <li>Explore</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;

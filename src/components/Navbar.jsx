import { Outlet, Link } from 'react-router-dom';
import { GiChaingun } from 'react-icons/gi';
import Footer from './Footer';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          <GiChaingun className="navbar__logo--icon" />
          <span className="navbar__logo--name">Olinarom</span>
        </Link>
        <div className="navbar__link">
          <Link to="" className="navbar__link--item">
            For sell
          </Link>
          <Link to="" className="navbar__link--item">
            For rent
          </Link>
          <Link to="" className="navbar__link--item">
            New Property
          </Link>
          <Link to="" className="navbar__link--item">
            Blogs
          </Link>
          <Link to="" className="navbar__link--item">
            KPR
          </Link>
        </div>
        <Link to="/login" className="navbar__login">
          Login/Register
        </Link>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;

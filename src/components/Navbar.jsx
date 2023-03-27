import { Outlet, Link } from 'react-router-dom';
import { GiChaingun } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import { updateStart, updateSuccess } from '../redux/userSlice';
import Footer from './Footer';

const Navbar = () => {
  const { firstname } = useSelector((state) => state.user.userInfo);

  const logoutHandler = () => {
    localStorage.removeItem('userData');
    dispatch(updateStart());
    dispatch(updateSuccess(null));
  };

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
        {firstname ? (
          <div className="navbar__user">
            <span className="navbar__user--name">Hello {firstname}</span>
            <Link to="" onClick={logoutHandler} className="navbar__logout">
              Logout
            </Link>
          </div>
        ) : (
          <Link to="/login" className="navbar__login">
            Login/Register
          </Link>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;

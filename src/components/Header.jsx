import { ImLocation } from 'react-icons/im';
import { MdHomeWork } from 'react-icons/md';
import { RiSearch2Line } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header__title heading--1">Discover a place</h1>
        <h1 className="header__title heading--1">You will love to live</h1>
      </div>
      <div>
        <p className="header__subtitle">
          Connect with more than 75 million renters looking for new homes
        </p>
        <p className="header__subtitle">
          using our comprehensive marketing platform.
        </p>
      </div>
      <div className="header__search">
        <div className="header__search--left">
          <div className="header__search--circle">
            <ImLocation className="header__search--location-icon" />
          </div>
          <div className="header__search--text-box">
            <p className="header__search--title">Location</p>
            <span className="header__search--subtitle">Bali, Indonesia</span>
          </div>
        </div>
        <div className="header__search--center">
          <div className="header__search--circle">
            <BiDollar className="header__search--price-icon" />
          </div>
          <div className="header__search--text-box">
            <p className="header__search--title">Price</p>
            <span className="header__search--subtitle">$5,000 - $10,000</span>
          </div>
        </div>
        <div className="header__search--right">
          <div className="header__search--circle">
            <MdHomeWork className="header__search--home-icon" />
          </div>
          <div className="header__search--text-box">
            <p className="header__search--title">Type of home</p>
            <span className="header__search--subtitle">Apartment</span>
          </div>
        </div>
        <div className="header__search--button">
          <RiSearch2Line className="header__search--search-icon" />
        </div>
      </div>
      <div className="header__sum">
        <div className="header__sum--left">
          <p className="header__sum--num">1500+</p>
          <span className="header__sum--desc">Property Ready</span>
        </div>
        <div className="header__sum--right">
          <p className="header__sum--num">500+</p>
          <span className="header__sum--desc">Happy Costumer</span>
        </div>
      </div>
    </div>
  );
};
export default Header;

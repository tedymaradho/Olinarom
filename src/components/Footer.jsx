import { Link } from 'react-router-dom';
import { GiChaingun } from 'react-icons/gi';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <p className="footer__top-left--title heading--subtitle">
          Find Home With Us
        </p>
        <div>
          <h2 className="footer__top-left--heading heading--2">
            Find the right house over
          </h2>

          <h2 className="footer__top-left--heading heading--2">
            400,000 property options
          </h2>
        </div>
        <button className="footer__top--button">Find Now</button>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--left">
          <Link to="/" className="footer__bottom--logo">
            <GiChaingun className="footer__bottom--logo-icon" />
            <span className="footer__bottom--logo-name">Olinarom</span>
          </Link>
          <div className="footer__bottom--address">
            <p>Jl. Raya Meruya Ilir 88,</p>
            <p>Kebun Jeruk, Jakarta Barat</p>
            <p>Jakarta 11620, Indonesia</p>
          </div>
          <div className="footer__bottom--icons">
            <BsInstagram className="footer__bottom--instagram" />
            <TbBrandTelegram className="footer__bottom--telegram" />
            <AiOutlineLinkedin className="footer__bottom--linkedin" />
            <FiTwitter className="footer__bottom--twitter" />
          </div>
        </div>

        <div className="footer__bottom--right">
          <ul className="footer__bottom--right-list">
            <li>Home</li>
            <li>For sell</li>
            <li>For rent</li>
            <li>New Property</li>
          </ul>
          <ul className="footer__bottom--right-list">
            <li>Blogs</li>
            <li>KPR</li>
            <li>Referral</li>
            <li>FAQs</li>
          </ul>
          <ul className="footer__bottom--right-list">
            <li>Privacy & Policy</li>
            <li>Terms & Condition</li>
            <li>Contact Us</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright@OdamaStudio2022-All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;

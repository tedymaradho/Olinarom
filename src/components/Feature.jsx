import { BiHomeSmile } from 'react-icons/bi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { AiOutlineWallet } from 'react-icons/ai';

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__top">
        <div className="feature__top-left">
          <p className="feature__top-left--title heading--title">
            WHY CHOOSE OLINAROM
          </p>
          <h2 className="feature__top-left--heading heading--2">
            Provides the most
          </h2>
          <h2 className="feature__top-left--heading heading--2">
            complete list of property
          </h2>
        </div>
        <p className="feature__top-right">
          Find the ideal property that is most suitable for you. Starting from
          houses for sale that are minimalist, apartments for sale that are
          exclusive.
        </p>
      </div>
      <div className="feature__bottom">
        <div className="feature__bottom-left">
          <BiHomeSmile className="feature__bottom-left--icon" />
          <h3 className="feature__bottom-left--title heading--subtitle">
            Find your dream house
          </h3>
          <p className="feature__bottom-left--desc">
            Many ads for apartments and houses for sale in various locations.
            Tap your finger on the screen then open the door of your dream house
            from here
          </p>
        </div>
        <div className="feature__bottom-center">
          <MdOutlineHomeWork className="feature__bottom-center--icon" />
          <h3 className="feature__bottom-center--title heading--subtitle">
            Find place of business
          </h3>
          <p className="feature__bottom-center--desc">
            Renting a place of business and buying and selling shop houses
            becomes easier. Meet your business and investment needs faster.
          </p>
        </div>
        <div className="feature__bottom-right">
          <AiOutlineWallet className="feature__bottom-right--icon" />
          <h3 className="feature__bottom-right--title heading--subtitle">
            Smart feature rich
          </h3>
          <p className="feature__bottom-right--desc">
            There are 900 thousand property ads. Everything you can explore and
            plan using smart features like the Mortgage Calculator.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Feature;

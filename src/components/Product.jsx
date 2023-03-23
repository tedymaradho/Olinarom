import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FaBed, FaBath } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Product = () => {
  return (
    <div className="product">
      <div className="product__top">
        <div className="product__top-left">
          <h3 className="product__top-left--title heading--title">PROPERTY</h3>
          <h2 className="heading--2">Property in Cities</h2>
          <h2 className="heading--2">and Provices in Indonesia</h2>
        </div>
        <Link to="" className="product__top-right">
          Explorer All Properties <BsArrowRight />
        </Link>
      </div>
      <div className="product__bottom">
        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/ecgevfjyb1lo-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">House</span>
            <span className="product__card--tag-item">Negotiable</span>
          </div>
          <h3 className="product__card--price">$75,000</h3>
          <p className="product__card--title">Luxury House Brandnew Pi...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 4 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 3 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/pxzhzgmha2yh3-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">Villa</span>
            <span className="product__card--tag-item">For Sale</span>
          </div>
          <h3 className="product__card--price">$55,000</h3>
          <p className="product__card--title">The Awani Residence 3</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 6 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 4 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/iyqryd1w6o45-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">Apartment</span>
            <span className="product__card--tag-item">For Sale</span>
          </div>
          <h3 className="product__card--price">$65,000</h3>
          <p className="product__card--title">Gold Coast Sea View Apart...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 6 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 5 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/g67iy8ugwdaw-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">Apartment</span>
            <span className="product__card--tag-item">Negotiable</span>
          </div>
          <h3 className="product__card--price">$45,000</h3>
          <p className="product__card--title">CitraLand BSB City Sema...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 5 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 3 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/v8265op2ml6b-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">House</span>
            <span className="product__card--tag-item">Negotiable</span>
          </div>
          <h3 className="product__card--price">$80,000</h3>
          <p className="product__card--title">AURORA Bukit Rancamaya...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 6 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 3 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/rhe5rz2fnhp91-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">House</span>
            <span className="product__card--tag-item">For Sale</span>
          </div>
          <h3 className="product__card--price">$60,000</h3>
          <p className="product__card--title">Cluster Persada 3, Cikarang...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 5 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 3 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/f014uo1epwt63-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">House</span>
            <span className="product__card--tag-item">Negotiable</span>
          </div>
          <h3 className="product__card--price">$50,000</h3>
          <p className="product__card--title">Amartha Residence, Jaya...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 4 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 2 bathroom
            </div>
          </div>
        </div>

        <div className="product__card">
          <div className="product__card--img-box">
            <div className="product__card--love">
              <AiOutlineHeart className="product__card--love-icon" />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/99rjyhvlmqyy2-ID/image;s=300x600;q=60"
              alt="image of home"
              className="product__card--img"
            />
          </div>
          <div className="product__card--tag">
            <span className="product__card--tag-item">For Sale </span>
            <span className="product__card--tag-item">Negotiable</span>
          </div>
          <h3 className="product__card--price">$40,000</h3>
          <p className="product__card--title">Citraland Cibubur Cilengus...</p>
          <div className="product__card--foot">
            <div className="product__card--foot-item">
              <FaBed className="product__card--bed-icon" /> 5 bedroom
            </div>
            <div className="product__card--foot-item">
              <FaBath className="product__card--bath-icon" /> 2 bathroom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;

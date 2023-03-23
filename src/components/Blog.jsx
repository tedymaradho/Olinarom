import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__top">
        <div className="blog__top-left">
          <h3 className="blog__top-left--title heading--title">BLOGS</h3>
          <h2 className="heading--2">Articles Related to</h2>
          <h2 className="heading--2">Aesthetic Home Design</h2>
        </div>
        <Link to="" className="blog__top-right">
          Explorer All Blogs <BsArrowRight />
        </Link>
      </div>

      <div className="blog__gallery">
        <div className="blog__left">
          <div className="blog__left--img-box">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="image of room"
              className="blog__left--img"
            />
          </div>
          <span className="blog__left--date">August 20, 2022</span>
          <h2 className="blog__left--title">
            You'll save time and money on trial- and-error decorating.
          </h2>
          <p className="blog__left--desc">
            Knowing your home aesthetic means you get access to the years and
            years of interior design study done by professional decorators. No
            more having to see if the metal print of your favorite...
          </p>
        </div>

        <div className="blog__right">
          <div className="blog__right--list">
            <div className="blog__right--img-box">
              <img
                src="https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="image of room"
                className="blog__right--img"
              />
            </div>
            <div className="blog__right--content">
              <span className="blog__right--date">August 10, 2022</span>
              <h4 className="blog__right--title heading--subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                iusto sint a odio minus praesentium quaerat...
              </h4>
            </div>
          </div>
          <hr className="blog__right--hr" />
          <div className="blog__right--list">
            <div className="blog__right--img-box">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="image of room"
                className="blog__right--img"
              />
            </div>
            <div className="blog__right--content">
              <span className="blog__right--date">August 12, 2022</span>
              <h4 className="blog__right--title heading--subtitle">
                Quis cupiditate dicta ex consequatur veritatis molestias quia
                facilis, qui, minus inventore ullam nulla aliquam...
              </h4>
            </div>
          </div>
          <hr className="blog__right--hr" />
          <div className="blog__right--list">
            <div className="blog__right--img-box">
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="image of room"
                className="blog__right--img"
              />
            </div>
            <div className="blog__right--content">
              <span className="blog__right--date">August 14, 2022</span>
              <h4 className="blog__right--title heading--subtitle">
                Consectetur adipisicing elit. Hic iusto sint a odio minus
                praesentium quaerat nulla aliquam, quis cupiditate dicta...
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

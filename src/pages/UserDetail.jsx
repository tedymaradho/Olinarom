import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const INITIAL_USER = {
  username: '',
  email: '',
  password: '',
  address: {
    street: '',
    city: '',
  },
  phone: '',
  name: {
    firstname: '',
    lastname: '',
  },
};

const UserDetail = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [user, setUser] = useState(INITIAL_USER);
  const params = useParams();

  useEffect(() => {
    if (userInfo.firstname) {
      const getUser = async () => {
        const resUser = await axios.get(
          `https://fakestoreapi.com/users/${params.id}`
        );

        resUser.status === 200 && setUser(resUser.data);
      };

      getUser();
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="user-detail">
      <h1 className="user-detail__title">User Detail</h1>
      <div className="user-detail__group">
        <label className="user-detail__label">Username</label>
        <span className="user-detail__item"> : {user.username}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">Firstname</label>
        <span className="user-detail__item"> : {user.name.firstname}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">Lastname</label>
        <span className="user-detail__item"> : {user.name.lastname}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">Email</label>
        <span className="user-detail__item"> : {user.email}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">Street Address</label>
        <span className="user-detail__item"> : {user.address.street}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">City</label>
        <span className="user-detail__item"> : {user.address.city}</span>
      </div>
      <div className="user-detail__group">
        <label className="user-detail__label">Phone</label>
        <span className="user-detail__item"> : {user.phone}</span>
      </div>
    </div>
  );
};
export default UserDetail;

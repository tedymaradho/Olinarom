import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const INITIAL_STATE = {
  username: '',
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  phone: '',
  email: '',
  password: '',
};

const UserForm = (props) => {
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const [user, setUser] = useState(INITIAL_STATE);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.firstname) {
      if (props.title === 'edit') {
        const getUser = async () => {
          const resUser = await axios.get(
            `https://fakestoreapi.com/users/${params.id}`
          );

          setUser({
            username: resUser.data.username,
            firstname: resUser.data.name.firstname,
            lastname: resUser.data.name.lastname,
            street: resUser.data.address.street,
            city: resUser.data.address.city,
            phone: resUser.data.phone,
            email: resUser.data.email,
            password: resUser.data.password,
          });
        };

        getUser();
      }
    } else {
      navigate('/login');
    }
  }, []);

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveHandler = async (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password || !user.firstname) {
      setErr(true);
      setMsg('Username, password, and firstname are required');
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      return;
    }

    if (props.title === 'edit') {
      const resUpdateUser = await axios.patch(
        `https://fakestoreapi.com/users/${params.id}`,
        {
          email: user.email,
          password: user.password,
          name: {
            firstname: user.firstname,
            lastname: user.lastname,
          },
          address: {
            city: user.city,
            street: user.street,
          },
          phone: user.phone,
        }
      );

      if (resUpdateUser.status === 200) {
        setErr(false);
        setMsg('Update data success');
      } else {
        setErr(true);
        setMsg('Update data failed');
      }
    } else {
      const resAddUser = await axios.post('https://fakestoreapi.com/users', {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        address: {
          city: user.city,
          street: user.street,
        },
        phone: user.phone,
      });

      if (resAddUser.status === 200) {
        setErr(false);
        setMsg('Add data success');
      } else {
        setErr(true);
        setMsg('Add data failed');
      }
    }

    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  return (
    <div className="userform">
      <h1 className="userform__title">{props.title.toUpperCase() + ' USER'}</h1>
      <form onSubmit={saveHandler} className="userform__form">
        <div className="userform__form--group">
          <label className="userform__form--label">Username</label>
          <input
            disabled={props.title === 'edit'}
            className="userform__form--input"
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user.username}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">First Name</label>
          <input
            className="userform__form--input"
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            value={user.firstname}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">Last Name</label>
          <input
            className="userform__form--input"
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            value={user.lastname}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">Email</label>
          <input
            className="userform__form--input"
            type="text"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">Password</label>
          <input
            className="userform__form--input"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">Street</label>
          <input
            className="userform__form--input"
            type="text"
            name="street"
            placeholder="Enter Street Address"
            value={user.street}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">City</label>
          <input
            className="userform__form--input"
            type="text"
            name="city"
            placeholder="Enter City"
            value={user.city}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label className="userform__form--label">Phone</label>
          <input
            className="userform__form--input"
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={user.phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="userform__form--group">
          <label></label>
          <button type="submit" className="userform__button-save">
            Save
          </button>
        </div>
      </form>
      <br />
      {alertVisible && (
        <p className={err ? 'error__message' : 'success__message'}>{msg}</p>
      )}
    </div>
  );
};
export default UserForm;

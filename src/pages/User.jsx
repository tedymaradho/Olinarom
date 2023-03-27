import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector((state) => state.user);

  const navigate = useNavigate();

  async function getUsers() {
    try {
      const res = await axios.get('https://fakestoreapi.com/users');
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (userInfo.firstname) {
      getUsers();
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="user">
      <h1 className="user__title">User Data</h1>
      <table className="user__table">
        <thead>
          <tr className="user__table--head">
            <th>Username</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>
              Action
              <Link to="/user/add" className="user__button--add">
                Add User
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, username, name, email, address, phone } = user;

            return (
              <tr key={id} className="user__table--row">
                <td className="user__table--cell">{username}</td>
                <td className="user__table--cell">
                  {name.firstname} {name.lastname}
                </td>
                <td className="user__table--cell">{email}</td>
                <td className="user__table--cell">
                  {address.street}, {address.city}
                </td>
                <td className="user__table--cell">{phone}</td>
                <td className="user__table--cell">
                  <AiFillEdit className="user__table--icon" />
                  &emsp;
                  <AiFillDelete className="user__table--icon" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default User;

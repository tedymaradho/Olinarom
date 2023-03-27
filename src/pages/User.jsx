import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const User = () => {
  const [users, setUsers] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState(null);

  const navigate = useNavigate();

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (userInfo.firstname) {
      async function getUsers() {
        try {
          const res = await axios.get('https://fakestoreapi.com/users');
          setUsers(res.data);
        } catch (error) {
          console.error(error);
        }
      }

      getUsers();
    } else {
      navigate('/login');
    }
  }, []);

  const delHandler = async (id) => {
    let sure = confirm('are you sure to delete the data?');

    if (sure != null) {
      const resDel = await axios.delete(`https://fakestoreapi.com/users/${id}`);

      if (resDel.status === 200) {
        setErr(false);
        setMsg('Data has been deleted');
      } else {
        setErr(true);
        setMsg('Failed to delete data');
      }
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="user">
      {alertVisible && (
        <p className={err ? 'error__message' : 'success__message'}>{msg}</p>
      )}
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
          {currentItems.map((user) => {
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
                  <Link to={`/user/${id}`}>
                    <AiFillEye className="user__table--icon-view" />
                  </Link>
                  &emsp;
                  <Link to={`/user/edit/${id}`}>
                    <AiFillEdit className="user__table--icon-edit" />
                  </Link>
                  &emsp;
                  <AiFillDelete
                    onClick={() => delHandler(id)}
                    className="user__table--icon-del"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="user__paginate"
      />
    </div>
  );
};
export default User;

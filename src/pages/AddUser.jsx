const AddUser = () => {
  return (
    <div className="adduser">
      <h1 className="adduser__title">Add User</h1>
      <form className="adduser__form">
        <div className="adduser__form--group">
          <label className="adduser__form--label">Username</label>
          <input
            className="adduser__form--input"
            type="text"
            name="username"
            placeholder="Enter Username"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">First Name</label>
          <input
            className="adduser__form--input"
            type="text"
            name="firstname"
            placeholder="Enter First Name"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Last Name</label>
          <input
            className="adduser__form--input"
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Username</label>
          <input
            className="adduser__form--input"
            type="text"
            name="username"
            placeholder="Enter Username"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Email</label>
          <input
            className="adduser__form--input"
            type="text"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Password</label>
          <input
            className="adduser__form--input"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Street</label>
          <input
            className="adduser__form--input"
            type="text"
            name="street"
            placeholder="Enter Street Address"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">City</label>
          <input
            className="adduser__form--input"
            type="text"
            name="city"
            placeholder="Enter City"
          />
        </div>
        <div className="adduser__form--group">
          <label className="adduser__form--label">Phone</label>
          <input
            className="adduser__form--input"
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="adduser__form--group">
          <label></label>
          <button className="adduser__button-add">Add</button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  //   const navOptions = (
  //     <>
  //       <li>
  //         <a>Item 555</a>
  //       </li>
  //       <li tabIndex={0}>
  //         <a className="justify-between">
  //           Parent
  //           <svg
  //             className="fill-current"
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="24"
  //             height="24"
  //             viewBox="0 0 24 24"
  //           >
  //             <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
  //           </svg>
  //         </a>
  //         <ul className="p-2">
  //           <li>
  //             <a>Submenu 1</a>
  //           </li>
  //           <li>
  //             <a>Submenu 2</a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li>
  //         <a>Item 3</a>
  //       </li>
  //     </>
  //   );

  const menuItem = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/menu">Menu</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/order/Salad">Order</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/contact">Contact</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/dashboard/mycart">
          <button className="btn btn-xs">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary"> {cart?.length || 0} </div>
          </button>
        </Link>{" "}
      </li>
      {user ? (
        <>
          <span>{user?.displayName}</span>

          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      {/* <li> {user ? <button className='btn btn-ghost' onClick={logout}  >SignOut</button> : <Link to="/login" >Login</Link>}</li> */}
      <li>
        <Link to="/dashboard">Dashboard</Link>{" "}
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity max-w-screen-xl  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black "
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  bg-black text-white ">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

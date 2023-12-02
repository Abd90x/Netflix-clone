import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className=" absolute w-full p-4 flex item-center justify-between z-50">
      <Link to="/">
        <img src={logo} alt="Logo" className="cursor-pointer max-w-full w-40" />
      </Link>

      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4">Profile</button>
          </Link>

          <button
            className="capitalize bg-red-600 py-2 px-6 rounded cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4">login</button>
          </Link>
          <Link to="/signup">
            <button className="capitalize bg-red-600 py-2 px-6 rounded cursor-pointer">
              signup
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

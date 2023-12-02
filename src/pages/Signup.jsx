import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

export default function Signup() {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" w-full h-screen">
        <img
          className=" hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/6ba8382a-1642-44f0-8896-25c2cecb5c83/JO-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className=" bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <div className=" fixed w-full px-4 py-24 z-20">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px]  mx-auto py-16 ">
              <h1 className=" text-3xl font-nsans-bold">Sign Up</h1>
              <form
                className=" w-full flex flex-col py-4"
                onSubmit={(e) => handleFormSubmit(e)}
              >
                <input
                  className=" p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className=" p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className=" bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Sign Up
                </button>
                <div className=" flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      className=" mr-2"
                      checked={rememberLogin}
                      onChange={() => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className=" my-4">
                  <span className=" text-gray-600 mr-2">
                    Already subscribed to Abdflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

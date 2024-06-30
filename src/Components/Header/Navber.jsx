import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContaxt } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContaxt);

  useEffect(() => {
    if (user) {
      updateUserProfile({
        displayName: "Atisha",
        photoURL:
          "https://i.pinimg.com/236x/fd/20/4b/fd204b723779072a2e55cc05d4cece6e.jpg",
      })
        .then(() => {
          console.log(user.displayName);
        })
        .catch((error) => console.log(error));
    }
  }, [user, updateUserProfile]);

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const link = (
    <ul className="lg:menu-horizontal gap-10 px-1 mx-6">
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "underline text-red-500 font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "underline text-red-500 font-bold" : ""
          }
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "underline text-red-500 font-bold" : ""
          }
          to={"/login"}
        >
          Login
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "underline text-red-500 font-bold"
                  : ""
              }
              to={`/donation`}
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "underline text-red-500 font-bold"
                  : ""
              }
              to={`/statistics`}
            >
              Statistics
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  console.log(user);
  return (
    <div className="navbar bg-base-100 flex justify-between p-3 items-center">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {link}
          </ul>
        </div>
        <img className="w-2/6" src="src/assets/Logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul>{link}</ul>
      </div>
      {user ? (
        <div className="bg-red-300 rounded-3xl">
          {user.displayName && (
            <p className="font-semibold mx-4">{user.displayName}</p>
          )}
          <button
            onClick={handleLogOut}
            className="ms-3 btn bg-red-500 text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link to={"/login"} className="ms-3 btn bg-red-500 text-white">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Navber;

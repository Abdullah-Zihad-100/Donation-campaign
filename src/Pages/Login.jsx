import { useContext, useState } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate()

  const {loginWithEmail}=useContext(AuthContaxt)

  
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);


      loginWithEmail(email, password)
      .then((error) => {
        console.log(error);
        setError('');
        setSuccess("SuccessFully Login")
        navigate('/');
      })
      .catch((result) => {
        console.log(result.user);
        setError('email password invalid')
        setSuccess('');
      })
    };
    return (
      <div>
        <Helmet>
          <title>Donation Login</title>
        </Helmet>
        <div className="hero min-h-[89vh]">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered  border-red-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered  border-red-500"
                    required
                  />
                </div>
                {error && <p className="text-xs my-2 text-red-500">{error}</p>}

                {success && 
                  <p className="text-xs my-2 text-green-500">{success}</p>
                }
                <div className="form-control mt-5">
                  <input
                    type="submit"
                    value="Login"
                    className="btn bg-red-500 text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
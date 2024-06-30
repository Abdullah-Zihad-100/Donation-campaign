import { useContext, useState } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate=useNavigate();
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const { registerWithEmail } = useContext(AuthContaxt);
    const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);


    if(password.length<6){
      setError("Please provide must be 6 character");
      return; 
    }
    else if( !/[A-Z]/.test(password)){
      setError("Please provide must be a uppercase character");
      return; 
    }


    registerWithEmail(email,password)
    .then(result=>{
      console.log(result.user);
      setSuccess("Successfully Register");
      setError("");
      navigate('/')
      return;


    })
    .catch(error=>{
      console.log(error);
     setError("Registation faild try again");
      setSuccess("");
      return;
    })

  };
  return (
    <div>
      <Helmet>
        <title>Dontaion Register page</title>
      </Helmet>
      <div className="hero min-h-[90vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now stay with us</h1>
            <p className="py-6">
              A donation is a gift for charity, humanitarian aid, or to benefit
              a cause. A donation may take various forms, including money, alms,
              services, or goods such as clothing, toys, food, or vehicles. A
              donation may satisfy medical needs such as blood or organs for
              transplant.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered border-red-500"
                  required
                />
              </div>

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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                { error &&
                <p className="text-xs my-2 text-red-500">{error}</p>
                }
                { success &&
                <p className="text-xs my-2 text-green-500">{success}</p>
                }
              </div>
              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Register"
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

export default Register;

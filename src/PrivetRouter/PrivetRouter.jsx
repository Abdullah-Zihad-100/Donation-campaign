import { useContext } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user,loading} =useContext(AuthContaxt)
    if(loading){
return (
  <div className="flex justify-center items-center mt-60">
    <span className="loading loading-spinner text-error"></span>
  </div>
);
    }
 if(user){
return children;
 }
 return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRouter;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Fire_base.config";


export const AuthContaxt=createContext(null);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const registerWithEmail=(email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithEmail=(email,password)=>{
                setLoading(true);

return signInWithEmailAndPassword(auth, email, password);
    }

const logOut=()=>{
            setLoading(true);

   return signOut(auth)
}


 const updateUserProfile = (profile) => {
         

    if (auth.currentUser) {
        // setLoading(true);
      return updateProfile(auth.currentUser, profile)
    }
  };



    useEffect(()=>{
   const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
       console.log('ovserving state changer',currentUser)
setUser(currentUser);
setLoading(false);
}) 
return ()=>{
    unSubscribe();
     }  
    },[])



const authInfo = {
  registerWithEmail,
  loginWithEmail,
  logOut,
  updateUserProfile,
  loading,
  user,
};
    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;
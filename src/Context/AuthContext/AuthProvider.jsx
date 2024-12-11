import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Auth/Firebase-init";


 
const AuthProvider = ({children}) => {
    

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

   const CreateUserWithEmailPass = (email,password)  => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   }


   const  loginWithEmailPass = (email,password)  => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
   }


   const logout = () => {
    setLoading(true)
    return signOut(auth)
   }


   useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        console.log('state captured:', currentUser)
        setLoading(loading);
   })
      return () => {
        unsubscribe();
      }  
    
    
   },[])



  const  authInfo = {
         user,
         loading,
         CreateUserWithEmailPass,
         loginWithEmailPass,
         logout,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
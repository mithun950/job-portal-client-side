import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottie from '../../login.json'
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {

       
    const {loginWithEmailPass} = useContext(AuthContext)
   
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/';



    const handleLogin = e => {


        e.preventDefault()
       
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {email,password}
         
        loginWithEmailPass(email,password)
         .then(result => {
            console.log(result.user)
            alert('Login Successfully!')
            navigate(from)
         })
         .catch(error => {
            console.log(error.message)
         })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="text-center lg:text-left w-96">
            {/* animation from lottie */}
      
            <Lottie animationData={loginLottie}></Lottie>
               
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center py-4">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
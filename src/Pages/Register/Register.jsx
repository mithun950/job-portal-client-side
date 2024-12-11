import Lottie from "lottie-react";
import registerLottieData from '../../register.json'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
   

    const {CreateUserWithEmailPass}= useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {email,password}
        console.log(newUser)
        CreateUserWithEmailPass(email,password)
        .then((result) => {
            console.log(result.user)
            alert('register successfully!')
        })
        .catch(error => {
            console.log(error.message)
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen mb-10 mt-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="text-center lg:text-left w-96">
      {/* animation from lottie */}

      <Lottie animationData={registerLottieData}></Lottie>
         
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold text-center py-4">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;
import React from 'react';
import SignInLottie from '../../assets/Lotties/SignIn.json';
import Lottie from 'lottie-react';

const SignIn = () => {

    const handleSignIn = e =>{
        e.preventDefault();
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <Lottie style={{width:300}} animationData={SignInLottie}></Lottie>  
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIn Now</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">SignIn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;
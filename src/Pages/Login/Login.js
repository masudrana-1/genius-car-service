import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 gap-20 mt-10 mb-24  lg:grid-col-2">
                <div className="text-center w-3/4 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <h1 className="text-5xl font-bold text-center">Login</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                        <p className='text-center mt-4'>News to Genius-Car <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
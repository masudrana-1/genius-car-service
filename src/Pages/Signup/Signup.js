import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SignupImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext);


    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 gap-20 mt-10 mb-24  lg:grid-col-2">
                <div className="text-center w-3/4 lg:text-left">
                    <img src={SignupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <h1 className="text-5xl font-bold text-center">SignUp</h1>

                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                        <p className='text-center mt-4'>Already have an account <Link className='text-orange-500 font-bold' to='/login'>LogIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
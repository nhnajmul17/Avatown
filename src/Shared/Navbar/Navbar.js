import React from 'react';

import userImage from '../../Assets/images/User.png'
import logo from '../../Assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="navbar w-full bg-gradient-to-r from-purple-900 to-purple-600">
            <div className="flex-1 ">
                <div >
                    <img className=" rounded-xl h-16 w-52" src={logo} alt="logo" />
                </div>
            </div>
            <div className="flex-auto">
                <div className='text-white text-2xl font-medium' >
                    <p>Go to Marketpage</p>
                    <hr className="h-px bg-white-700"></hr>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">

                    <input type="text" placeholder="" className="input input-bordered rounded-md w-96 h-7" />

                </div>
                <button className="btn btn-ghost bg-gray-700 rounded-xl">
                    <div className="indicator text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-sm bg-red-500 indicator-item rounded-full">3</span>
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost bg-gray-700 rounded-xl">
                        <div className="indicator text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm bg-red-500 indicator-item rounded-full">1</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-12 h-12">
                        <div className=" rounded-xl">
                            <img src={userImage} alt="userImage" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { signIn } from '../../../auth';
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg py-6 px-10 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4 ">
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" className="w-full py-1 px-3 rounded-lg bg-gray-50 border-[1px] border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" name="password" className="w-full py-1 px-3 rounded-lg bg-gray-50 border-[1px] border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-inner"
                        />
                    </div>
                    {/* <div className='flex justify-center w-full '> */}
                    <form action={
                        async () => {
                            'use server'
                            await signIn()
                        }

                    } className='flex justify-center'>

                        <button type="submit" className="w-2/3 bg-blue-900 text-white text-center rounded-lg px-1 py-2 mt-4">
                            Sign In
                        </button>

                    </form>

                    {/* </div> */}
                </form>

                <div className="mt-6 mb-4 flex items-center justify-center w-full">
                    <div className="border-t border-gray-300 w-1/4"></div>
                    <p className="text-gray-500 mx-4">or</p>
                    <div className="border-t border-gray-300 w-1/4"></div>
                </div>

                <form action={
                    async () => {
                        'use server'
                        await signIn('google')
                    }
                } className='flex justify-center'>
                    <button
                        className="w-2/3 text-[14px] flex items-center justify-center py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium shadow-inner transition-all"
                    >
                        <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
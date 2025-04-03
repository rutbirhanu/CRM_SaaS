import React from 'react';
import { signIn } from '../../../auth';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4 w-full">
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 rounded-lg p-3 shadow-inset" />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-gray-100 rounded-lg p-3 shadow-inset" />
                    </div>
                    <div className='flex justify-center'>
                        <form action={
                            async () => {
                                'use server'
                                await signIn()
                            }

                        }>

                            <button type="submit" className="w-1/2 bg-blue-500 text-white text-center rounded-lg px-4 py-2 mt-4">
                                Sign In
                            </button>
                        </form>

                    </div>
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
                }>
                    <button className="w-1/2 bg-red-500 text-white rounded-lg px-4 py-2">
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
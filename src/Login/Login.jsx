import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config';
import { NavLink, useNavigate } from 'react-router-dom'
import newim from './loginin.png'

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
                alert("Login Successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert("Wrong Password / Wrong Email ")
            });

    }

    return (

        <div className="flex justify-center align-middle">


            <div className="w-1/2">
                {/* <img src="https://i.ibb.co/RzZ8d4v/6310507.jpg" alt="" /> */}
                <img src={newim} alt="" />
            </div>

            <div className="w-1/2 py-56 pr-16">
                <form className="space-y-6" action="#">
                    <h5 className="text-4xl font-medium text-gray-900 dark:text-white">Please Login First</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={(e) => setPassword(e.target.value)}
                            required

                        />
                    </div>
                    {/* <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                            Lost Password?
                        </a>
                    </div> */}
                    <button
                        onClick={onLogin}
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{' '}
                        <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                            Create account
                        </a>
                    </div> */}
                </form>
            </div>


        </div>
    )
}

export default Login
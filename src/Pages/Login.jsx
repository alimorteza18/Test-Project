import { useState } from "react";
import Particle from "../Utils/Particle";
import { login } from "../Services/contactService";
import Swal from "sweetalert2";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const user = { email, password};
        try {
            const { status, data } = await login(user);
            if (status === 201) {
                localStorage.setItem("token", data.access_token)
                window.location.href = "/products";
            }
        } catch (ex) {
            console.log(ex);
            Swal.fire({
              icon: 'error',
              title: 'خطا !',
              text: 'نام کاربری یا رمز عبور صحیح نمی باشد.',
              type: 'error',
              confirmButtonText: 'متوجه شدم',   
          })
        }
    }
    return (<>
        <Particle />
        <section className="bg-opacity-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="w-full flex justify-center items-center">
                            <img className="w-36 h-36" src="./login-logo.png" alt="" />
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="email" className="text-blue-600 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Park@gmail.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-blue-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Login;
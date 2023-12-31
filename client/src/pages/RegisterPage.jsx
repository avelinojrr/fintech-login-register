import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();
    const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate])

    const onSubmit = handleSubmit(async (values) => {
        signUp(values);
    })

    return (
        <div>
            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Register for an account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        
                        {
                            registerErrors.map((error, index) => (

                                <div className="rounded-md font-medium text-black bg-red-400 p-2 mb-3" key={index}>
                                    {error}
                                </div>
                            ))
                        }

                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        {...register("username", { required: true, })
                                        }
                                        placeholder="Username"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        errors.username && <p className="text-red-500 py-1">* Username is required *</p>
                                    }
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        {...register("email", { required: true, })
                                        }
                                        placeholder="name@company.com"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        errors.email && <p className="text-red-500 py-1">* Email is required *</p>
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        {...register("password", { required: true, })
                                        }
                                        placeholder="**********"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        errors.password && <p className="text-red-500 py-1">* Password is required *</p>
                                    }
                                </div>

                                {/* create a checkbox por terms and conditions */}

                                <div className="flex items-center py-3   " >
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-md "
                                    />
                                    <label
                                        htmlFor="remember_me"
                                        className="ml-2 block text-sm leading-5 text-gray-900"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </label>

                                </div>

                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Create an account
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPage;

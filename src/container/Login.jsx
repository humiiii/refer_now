import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative w-full h-full">
      <div className="bg-[url(./assets/images/login.jpg)] w-full h-screen bg-cover bg-center relative left-[-40%] max-sm:hidden">
        <div className="w-full h-full bg-black opacity-30"></div>
      </div>
      <div className="bg-slate-50 w-full sm:w-[70%] md:w-[60%] xl:w-1/2 absolute right-0 top-0 h-screen rounded-tl-[40px] rounded-bl-[40px] p-8 shadow-lg">
        <div className=" text-sm w-full text-right">
          <p>
            {"Don't have account?"}
            <Link to="/signup" className="text-blue-900">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
        <div className="py-4 my-10 w-[90%] sm:w-[80%] xl:w-[70%] max-w-[460px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold pb-2">Welcome Back</h2>
          <p className="text-sm text-slate-500">Sign in to your account</p>
        </div>
        <div className="w-[90%] sm:w-[80%] xl:w-[70%] max-w-[460px] mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;

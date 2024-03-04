import { FcGoogle } from "react-icons/fc";

const SignInWithGoogleButton = () => {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer w-full relative">
      <div className="absolute bg-white p-1 top-0 left-0 m-1 rounded-sm">
        <FcGoogle size={25} />
      </div>
      <p className="ml-10">Continue with Google</p>
    </div>
  );
};

export default SignInWithGoogleButton;

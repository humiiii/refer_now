import { FaMeta } from "react-icons/fa6";

const SignInWithMetaButton = () => {
  return (
    <div className="bg-[#2e5c98] hover:bg-blue-800  font-medium py-2 px-4 rounded cursor-pointer w-full relative">
      <div className="absolute bg-white p-1 top-0 text-[#0081fb]  left-0 m-1 rounded-sm">
        <FaMeta size={25} />
      </div>
      <p className="ml-10 text-white">Continue with Meta</p>
    </div>
  );
};

export default SignInWithMetaButton;

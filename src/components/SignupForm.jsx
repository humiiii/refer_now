import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaAsterisk } from "react-icons/fa";
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import SignInWithMetaButton from "./SignInWithMetaButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleOnClickEye = () => {
    setIsPasswordVisible((preVal) => !preVal);
  };

  useEffect(() => {
    const input = document.querySelector("#password-input");
    if (isPasswordVisible) {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }, [isPasswordVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.email);
    console.log(formData.fullname);
    console.log(formData.password);
  };

  return (
    <form
      action=""
      method=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <div className="flex items-end gap-8">
        <FaRegCircleUser size={25} className="text-slate-600" />
        <input
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, fullname: e.target.value });
          }}
          value={formData.username}
          className="
              border-b
              border-gray-300
              px-3
              py-2
              focus:outline-none
              focus:border-b-blue-500
              w-full
              sm:text-sm
              bg-transparent
              "
          placeholder="Full Name"
        />
      </div>
      <div className="flex items-end gap-8">
        <MdAlternateEmail size={25} className="text-slate-600" />
        <input
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.username}
          className="
              border-b
              border-gray-300
              px-3
              py-2
              focus:outline-none
              focus:border-b-blue-500
              w-full
              sm:text-sm
              bg-transparent
              "
          placeholder="Email"
        />
      </div>
      <div className="flex items-end gap-8 relative">
        <FaAsterisk size={20} className="text-slate-600" />
        <input
          id="password-input"
          type={isPasswordVisible ? "text" : "password"}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
          className="
              border-b
              border-gray-300
              px-3
              py-2
              focus:outline-none
              focus:border-b-blue-500
              w-full
              sm:text-sm
              bg-transparent
              "
          placeholder="Password"
        />
        <button
          onClick={handleOnClickEye}
          className="absolute right-0 bottom-2 text-slate-600"
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className="flex items-center ml-12">
        <input
          type="checkbox"
          id="keepSignedIn"
          defaultChecked
          className="form-checkbox h-3 w-3 text-blue-600"
        />
        <label
          htmlFor="keepSignedIn"
          className="ml-2 block text-xs text-gray-900 cursor-pointer"
        >
          Keep me signed in
        </label>
      </div>
      <div className="w-[90%] self-end">
        <div className="w-full">
          <input
            type="submit"
            value="Signup"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer w-full"
          />
        </div>
        <div className="flex items-center justify-between text-sm py-4">
          <span className="inline-block w-[40%] h-[1px] bg-slate-400"></span>
          <p className="text-slate-500">OR</p>
          <span className="inline-block w-[40%] h-[1px] bg-slate-400"></span>
        </div>
        <div className="w-full flex flex-col gap-4">
          <SignInWithGoogleButton />
          <SignInWithMetaButton />
        </div>
      </div>
    </form>
  );
};
export default SignupForm;

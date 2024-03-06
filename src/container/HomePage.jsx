import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="m-8 p-8 lg:w-1/2 mx-auto rounded-lg text-center bg-slate-200">
        <h1 className="mb-12 text-4xl font-medium">
          What do you have in mind today?
        </h1>
        <div className=" flex justify-center gap-8">
          <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg text-white">
            Start search for new talent?
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg text-white">
            <Link to={"/jobs"}>Empower someone with a referral?</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default HomePage;

import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="py-6 px-16 flex justify-between bg-slate-200 shadow-sm">
      <div className="text-2xl font-bold">ReferNow</div>
      <div className="flex items-center gap-8">
        <button className="bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-lg text-white">
          Check my Jobs
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-lg text-white">
          Check my Talents
        </button>
        <div className="text-slate-600">
          <FaCircleUser size={35} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

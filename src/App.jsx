import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Signup from "./container/Signup";
import HomePage from "./container/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
export default App;

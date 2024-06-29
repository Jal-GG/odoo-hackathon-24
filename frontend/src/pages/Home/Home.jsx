import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#100E09]">
      <Navbar />
      <div className="flex  sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden  bg-clip-padding bg-opacity-20">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
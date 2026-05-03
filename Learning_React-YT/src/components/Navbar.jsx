import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-primary)] text-white px-10 py-1 flex items-center justify-between sticky z-99 top-0">
        <div className="flex">
          <img src="logo1.png" alt="logo1.png" width="90px" className="animate-bounce"/>
          <img src="Hero.png" alt="" width="90px" className="animate-[slideX_10s_ease-in-out_infinite]" />
        </div>
        <div className="text-lg flex items-center gap-3">
          <button className="px-3 py-1 rounded-sm border border-transparent hover:border-white">
            Login
          </button>
          <button className="px-3 py-1 rounded-sm bg-white text-[var(--color-primary)] border border-transparent hover:border-white hover:bg-[var(--color-primary)] hover:text-white">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

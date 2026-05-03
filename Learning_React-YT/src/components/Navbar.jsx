import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-primary)] text-white px-10 py-1 flex items-center justify-between sticky z-99 top-0">
        <img src="logo1.png" alt="logo1.png" width="90px" />
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

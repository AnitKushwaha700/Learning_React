import React from "react";

import Dropdown from "./Dropdown";

import { navLinks } from "../../data/navLinksData";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      
      {navLinks.map((item) => (
        
        <div key={item.id}>
          
          {item.submenu ? (
            <Dropdown item={item} />
          ) : (
            <a
              href={item.path}
              className="text-[15px] font-medium text-dark hover:text-primary transition-all duration-300"
            >
              {item.title}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
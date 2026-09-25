import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/logo-text.png";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <nav className=" relative container mx-auto flex justify-between items-center py-2.5 px-4">
      {/* Mobile Hamburger */}
      <div className="cursor-pointer w-35  text-[#7B7171] ">
        <RxHamburgerMenu onClick={handleMenu} size={28} />
      </div>

      {/* Mobile Logo */}
      <img className="w-28 h-auto" src={Logo} alt="Logo" />

      {/* Mobile button */}
      <div className="flex items-center w-35 justify-center gap-1">
        <button className="rounded-full bg-white py-1.5 px-3 text-[10px] md:text-xs hover:text-[#DB2777] font-medium text-[#334155] cursor-pointer border-0">
          Sign In
        </button>
        <button className="rounded-full bg-[#D91B7E] py-1.25 px-2.5 text-[10px] md:text-xs hover:opacity-90 font-semibold shadow-md  text-white cursor-pointer">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      {open === true ? (
        
          <ul className=" absolute top-full left-4 flex flex-col bg-gray-100 p-2 gap-2.5 text-xs font-medium">
              <li className="text-pink-600">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        
      ) : (
        ""
      )}
    </nav>
  );
}

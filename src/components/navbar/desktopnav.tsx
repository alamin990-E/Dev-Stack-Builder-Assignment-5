import Logo from "../../assets/logo-text.png"

export default function DesktopNav() {
    
    return (
        <nav className=" container mx-auto flex justify-between items-center py-2.5">
            {/* Logo image */}
            <img src={Logo} alt="Logo" />

            {/* menu */}
            <ul className="flex gap-2 lg:gap-4 text-sm font-medium transition-colors">
              <li className="text-[#DB2777]">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
           
           {/* button */}
            <div className="flex items-center justify-center gap-1 lg:gap-2">
                <button className="rounded-full bg-white py-2 px-4 text-[14px] hover:text-[#DB2777] font-medium text-[#334155] cursor-pointer border-0">Sign In</button>
                <button className="rounded-full bg-[#D91B7E] py-2 px-4 text-[14px] hover:opacity-90 font-semibold shadow-md  text-white cursor-pointer">Sign Up</button>
            </div>

        </nav>
    )
}
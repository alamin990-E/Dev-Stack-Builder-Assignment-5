import DesktopNav from "./desktopnav";
import MobileNav from "./mobilenav";


export default function Navbar() {
    
    return (
       <div>
             <div className="md:block hidden">
                <DesktopNav></DesktopNav>
             </div>
             <div className="md:hidden block">
                <MobileNav></MobileNav>
             </div>
       </div>
    )
}
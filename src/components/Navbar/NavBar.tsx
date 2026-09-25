import DesktopNav from "./Desktopnav";
import MobileNav from "./Mobilenav";




export default function Navbar() {
    
    return (
       <div>
             <div className="md:block hidden">
                <DesktopNav/>
             </div>
             <div className="md:hidden block">
                <MobileNav/>
             </div>
       </div>
    )
}
import Logo from "../../assets/logo-text.png"

export default function DesktopFooter() {
    
    return (
        <footer className="mt-12 border-t border-gray-200">
      <div className="container mx-auto  grid grid-cols-5 py-15">
        {/* Brand */}
        <div className="col-span-2">
          <img src={Logo} className="w-32 h-auto" alt="Logo" />
          <p className="pt-2 max-w-sm xl:max-w-md text-sm ">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
         <div className="flex gap-5  text-sm mt-6">
            <a href="#" className="font-bold text-[#475569] hover:text-pink-600">GitHub</a>
            <a href="#" className="font-bold text-[#475569] hover:text-pink-600">Twitter</a>
            <a href="#" className="font-bold text-[#475569] hover:text-pink-600">LinkedIn</a>
         </div>
        </div>

        {/* Product */}
        <div className="col-span-1  border-gray-500"> 
            <h2 className="text-sm font-semibold text-[#0F172A]">PRODUCT</h2>
            <div className="pt-3 flex flex-col gap-2">
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Home</a>
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Technologies</a>
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Projects</a>
            </div>
        </div>

        {/* Company */}
        <div className="col-span-1  border-gray-500"> 
            <h2 className="text-sm font-semibold text-[#0F172A]">COMPANY</h2>
            <div className="pt-3 flex flex-col gap-2">
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">About</a>
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Contact</a>
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Careers</a>
            </div>
        </div>
        
        {/* Legal */}
        <div className="col-span-1  border-gray-500"> 
            <h2 className="text-sm font-semibold text-[#0F172A]">LEGAL</h2>
            <div className="pt-3 flex flex-col gap-2">
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Privacy Policy</a>
                <a href="#" className="text-sm text-[#475569] hover:text-pink-600">Terms of Service</a>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
         <div className="flex justify-between border-t border-gray-200 pt-6 container mx-auto">
            <p className="text-sm text-[#94A3B8]">&copy; 2026 Dev Stack. All rights reserved.</p>
            <div className="flex flex-row gap-5">
                <a href="#" className="text-sm text-[#94A3B8] hover:text-pink-600">Privacy</a>
                <a href="#" className="text-sm text-[#94A3B8] hover:text-pink-600">Terms</a>
            </div>
         </div>

    </footer>
    )
}
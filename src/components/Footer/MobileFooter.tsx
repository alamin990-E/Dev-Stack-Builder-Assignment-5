import Logo from "../../assets/logo-text.png";

export default function MobileFooter() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-6 border-t border-gray-200 space-y-5 mt-8">
        <div className="grid justify-center text-center items-center">
          <img src={Logo} className="w-35 mb-2 h-auto mx-auto" alt="Logo" />
          <p className="pt-2 max-w-sm text-sm mb-4 ">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex flex-row justify-center items-center text-sm mb-6 gap-5">
            <a
              href="#"
              className="font-bold text-[#475569] hover:text-pink-600"
            >
              GitHub
            </a>
            <span className="dot font-bold text-[#475569]">•</span>
            <a
              href="#"
              className="font-bold text-[#475569] hover:text-pink-600"
            >
              Twitter
            </a>
            <span className="dot font-bold text-[#475569]">•</span>
            <a
              href="#"
              className="font-bold text-[#475569] hover:text-pink-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between border-t border-gray-200 pt-6 container mx-auto">
          <p className="text-sm text-[#94A3B8]">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex flex-row gap-5">
            <a href="#" className="text-sm text-[#94A3B8] hover:text-pink-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-[#94A3B8] hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

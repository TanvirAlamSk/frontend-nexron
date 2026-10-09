import Link from "next/link";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Date from "./Date";

const Footer = () => {

  return (
    <div className=" bg-slate-100 flex flex-col justify-between font-sans text-slate-800 antialiased selection:bg-purple-200">
      <footer className="w-full bg-[#f4f4f5] border-t border-slate-200/80 pt-16 pb-12 transition-all">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center justify-center gap-2.5 mb-4 group cursor-pointer">
            <div className="relative w-9 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#111827] font-sans">
               <Image src={logo} width={150} height={250} alt="website logo"></Image>
            </span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed font-normal">
              Save big this Black Friday with unbeatable deals on tech, home essentials, fashion, and more! Limited stock.
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto my-8">
            <div className="h-px bg-slate-300/60 w-full"></div>
          </div>

          <NavLinks></NavLinks>

          <div className="flex items-center justify-center gap-4">
            
            <Link
              href="#facebook" 
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm hover:shadow"
            >
              {/* <Facebook className="w-4 h-4 fill-current stroke-none" /> */}
            </Link>

            <Link
              href="#instagram" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm hover:shadow"
              style={{
                background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
              }}
            >
            </Link>

            <Link
              href="#x" 
              aria-label="X (Twitter)"
              className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm hover:shadow"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            <Date></Date> Nexora Inc. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
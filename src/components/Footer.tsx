import SectionHeading from "./UI/SectionHeading";

export default function Footer() {
    return (
      <footer className="bg-black relative dark:bg-white -mt-20 mb-5 z-10 text-white dark:text-black mx-5 py-16 rounded-[52px] ">
        <div className="container-default">
          {/* Top Row */}
          <div className="flex flex-col w-full lg:flex-row justify-between mb-12">
            <h1 className="text-primary w-1/3 font-bold text-xl">DEVLOP.ME</h1>
            <div className="w-2/3">
        <h1 className="text-[64px] font-bold leading-none ">As You Can</h1>
              {/* Middle Grid */}
          <div className="flex justify-between gap-12  mt-24">
            {/* Column 1 */}
            <div>
              <p className="text-[16px] text-[#757575] mb-4 dark:text-black">Say hello</p>
              <p className="mb-3 text-[16px] text-[#E4E4E4] dark:text-black/60 ">HELLO@DEVLOP.ME.COM</p>
              <p className="mb-2 text-[16px] text-[#E4E4E4] dark:text-black/60 ">MAHBUBUL@ME.COM</p>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4 mt-8">Call</p>
              <p className="mb-3 text-[16px] text-[#E4E4E4] dark:text-black/60 ">+784549 4981 00</p>
              <p className="mb-3 text-[16px] text-[#E4E4E4] dark:text-black/60 ">+8845 0100 211</p>
            </div>
  
            {/* Column 2 */}
            <div>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4">Menu</p>
              <ul className="space-y-3 text-[16px] text-[#E4E4E4] dark:text-black/60 ">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4">Social</p>
              <ul className="space-y-3 text-[16px] text-[#E4E4E4] dark:text-black/60 ">
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBBLE</li>
              </ul>
            </div>
          </div> 
          </div>
          </div>
  
        
          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center  pt-20">
           
           <h1 className=" text-[24px] tracking-[-2px]">BESNIK</h1>
           
            <p className="text-[16px] text-white/50 dark:text-black">© devlop.me 2022
            </p>
            <p className="text-[16px] text-white/50  dark:text-black">PRIVACY - TERMS</p>
          </div>
        </div>
      </footer>
    );
  }
  
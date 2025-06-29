
export default function Footer() {
    return (
      <footer className="bg-black relative dark:bg-white -mt-20 lg:mb-5 mb-2 z-10 text-white dark:text-black lg:mx-5 mx-2 lg:py-16 py-8 lg:rounded-[52px] rounded-2xl ">
        <div className="container-default">
          {/* Top Row */}
          <div className="flex flex-col w-full lg:flex-row justify-between gap-5 mb-12">
            <h1 className="text-primary lg:w-1/3 w-full font-bold lg:text-xl text-lg">DEVLOP.ME</h1>
            <div className="lg:w-2/3 w-full">
        <h1 className="lg:text-[64px] text-[24px] font-bold leading-none ">As You Can</h1>
              {/* Middle */}
          <div className="flex lg:flex-row flex-wrap justify-between gap-12  lg:mt-24 mt-16">
            {/* Column 1 */}
            <div>
              <p className="text-[16px] text-[#757575] mb-4 dark:text-black">Say hello</p>
              <p className="mb-3 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">HELLO@DEVLOP.ME.COM</p>
              <p className="mb-2 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">MAHBUBUL@ME.COM</p>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4 mt-8">Call</p>
              <p className="mb-3 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">+784549 4981 00</p>
              <p className="mb-3 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">+8845 0100 211</p>
            </div>
  
            {/* Column 2 */}
            <div>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4">Menu</p>
              <ul className="space-y-3 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <p className="text-[16px] text-[#757575] dark:text-black mb-4">Social</p>
              <ul className="space-y-3 lg:text-[16px] text-sm text-[#E4E4E4] dark:text-black/60 ">
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
  
        
          {/* Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center  lg:pt-20 pt-12">
           
           <h1 className=" lg:text-[24px] text-xl tracking-[-2px]">BESNIK</h1>
           
            <p className="lg:text-[16px] text-sm text-white/50 dark:text-black">© devlop.me 2022
            </p>
            <p className="lg:text-[16px] text-sm text-white/50  dark:text-black">PRIVACY - TERMS</p>
          </div>
        </div>
      </footer>
    );
  }
  
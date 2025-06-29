
import About from "@/components/Home/About";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/Herosection";
import WhyChooseMe from "@/components/Home/WhyChooseMe";
import WorkProcess from "@/components/Home/WorkProcess";

export default function Home() {
  return (
   <div className=" ">
    <HeroSection/>
    <WhyChooseMe/>
   <About/>
   <WorkProcess/>
   <ContactSection/>
   </div>
  );
}

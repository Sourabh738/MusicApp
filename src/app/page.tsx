import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestmonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
   </>
  );
}

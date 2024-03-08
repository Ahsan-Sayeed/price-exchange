import Banner from "@/components/Banner/Banner";
import ExtraSec from "@/components/ExtraSec/ExtraSec";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-base-400">
      <NavigationBar></NavigationBar>
      <Banner/>
      <Hero/>
      <ExtraSec/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

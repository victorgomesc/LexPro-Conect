import Book from "@/components/ExplanationCard";
import Footer from "@/components/Footer";
import GridNews from "@/components/GridNews";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntrductionCard from "@/components/IntrductionCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div>
    <Header />
    <Navbar />
    <Hero />
    <IntrductionCard />
    <Book />
    <GridNews />
    <Footer />
   </div>
  );
}

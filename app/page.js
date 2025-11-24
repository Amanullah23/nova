"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Chart from "./components/Chart";
import BusinessOverview from "./components/BusinessOverview";
import ManagementTeam from "./components/ManagementTeam";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  
  useEffect(() => {
    const initAOS = async () => {
       await import('aos');
        AOS.init({
        duration: 800,
        easing: 'ease', 
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);

  
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Chart />
      <BusinessOverview />
      <ManagementTeam />
      <Contact />
      <Footer />
    </>
  );
}

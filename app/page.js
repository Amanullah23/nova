"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Project from "./components/Project";
import Chart from "./components/Chart";
import BusinessOverview from "./components/BusinessOverview";
import ManagementTeam from "./components/ManagementTeam";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Project />
      <Chart />
      <BusinessOverview />
      <ManagementTeam />
      <Contact />
      <Footer />
    </>
  );
}

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

export default function Home() {
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

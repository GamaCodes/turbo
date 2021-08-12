import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Service from "../../components/Service";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </>
  );
}

import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
// import Skills from "components/OldSkills/Skills";
import Projects from "../../components/Projects/Projects";
import ContactMe from "../../components/Contact/ContactMe";
import Certifications from "../../components/Certifications/Certifications";
import React, { useEffect, useState } from "react";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import { portfolioData } from "../../portfolioData";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  return {
    props: {
      data: portfolioData,
    },
  };
}

type Props = {
  data: any;
};

export default function Home(props: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    // Visitor tracking only once per session
    if (!sessionStorage.getItem("tracked")) {
      fetch("/api/trackVisit")
        .then(() => sessionStorage.setItem("tracked", "true"))
        .catch((err) => console.error("Tracking failed", err));
    }
  }, []);

  return (
    <div
      className="bg-black text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full"
    >
      <Head>
        <title>{`Daniyal's Portfolio`}</title>
      </Head>

      {/* Header */}
      <Header data={props.data[5]} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero data={props.data[1]} />
      </section>

      {/* About */}
      <section id="about" className="snap-center snap-mandatory snap-always">
        <About data={props.data[0]} />
      </section>

      {/* Certifications */}
      <section id="certifications" className="snap-start snap-mandatory snap-always">
        <Certifications data={props.data[2]} />
      </section>

      {/* Skills (new section) */}
      <section id="skills" className="snap-start snap-mandatory snap-always">
        <SkillsSection data={props.data[3]} />
      </section>

      {/* Projects (new) */}
      <section id="projects" className="snap-start snap-mandatory snap-always max-h-screen overflow-clip">
        <Projects data={props.data[4]} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start snap-mandatory snap-always">
        <ContactMe />
      </section>
    </div>
  );
}
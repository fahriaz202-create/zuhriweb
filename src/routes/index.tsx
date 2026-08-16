import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero,
  About,
  Skills,
  Projects,
  Journey,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fahri Az-Zuhri — Developer & AI Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Fahri Az-Zuhri, grade 12 student, developer and AI engineer focused on programming, artificial intelligence, and cybersecurity.",
      },
      { property: "og:title", content: "Fahri Az-Zuhri — Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Grade 12 student building in programming, AI, and cybersecurity. Projects, skills, and journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-racing-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

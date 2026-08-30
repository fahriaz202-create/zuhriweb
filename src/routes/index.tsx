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
      { title: "Fahri Az-Zuhri — 3D Designer & Industrial Design Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Fahri Az-Zuhri, grade 12 student and 3D designer working in Blender and Cinema 4D on vehicles, products, and industrial design concepts.",
      },
      { property: "og:title", content: "Fahri Az-Zuhri — 3D Designer & Industrial Design" },
      {
        property: "og:description",
        content:
          "Grade 12 student building 3D models and industrial design concepts in Blender. Works, skills, and journey.",
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

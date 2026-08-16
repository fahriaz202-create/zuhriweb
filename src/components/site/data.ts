// Edit this file to update portfolio content.

import work2 from "@/assets/work-2.png.asset.json";
import work3 from "@/assets/work-3.png.asset.json";
import work4 from "@/assets/work-4.png.asset.json";
import work5 from "@/assets/work-5.png.asset.json";

export const profile = {
  name: "FAHRI AZ-ZUHRI",
  role: "GRADE 12 STUDENT • 3D DESIGNER • INDUSTRIAL DESIGN",
  birthDate: "12/07/2008",
};

export const skills = [
  { no: "01", name: "3D MODELLING", tags: "BLENDER • HARD SURFACE" },
  { no: "02", name: "INDUSTRIAL DESIGN", tags: "PRODUCT • CONCEPT" },
  { no: "03", name: "RENDERING & LIGHTING", tags: "CYCLES • EEVEE" },
  { no: "04", name: "TEXTURING & MATERIALS", tags: "PBR • SHADERS" },
  { no: "05", name: "CAD & VISUALIZATION", tags: "CINEMA 4D • ARCHVIZ" },
  { no: "06", name: "ENGLISH & ARABIC", tags: "LANGUAGE • SPEAKING" },
];

export const projects = [
  {
    no: "01",
    name: "AUTOMOTIVE HARD SURFACE",
    description:
      "Sedan body modelling with multi-camera rig setup, wheel and brake detailing, and material passes prepared for animation.",
    tech: ["CINEMA 4D", "HARD SURFACE", "AUTOMOTIVE"],
    image: work2.url,
    alt: "Automotive 3D sedan model in a 3D modelling workspace",
  },
  {
    no: "02",
    name: "LIBRARY INTERIOR SCENE",
    description:
      "Full interior environment blocked out in Blender — shelving, furniture, and camera framing built for a clean clay render pass.",
    tech: ["BLENDER", "ENVIRONMENT", "ARCHVIZ"],
    image: work3.url,
    alt: "Blender viewport with a library interior scene in clay shading",
  },
  {
    no: "03",
    name: "CLOTH REVEAL STUDY",
    description:
      "Cloth simulation covering a vehicle for a reveal shot, with render passes and view layers configured for compositing.",
    tech: ["BLENDER", "SIMULATION", "RENDER PASSES"],
    image: work4.url,
    alt: "Blender cloth simulation covering a vehicle for a reveal animation",
  },
  {
    no: "04",
    name: "WORKSHOP / STORAGE ROOM",
    description:
      "Industrial storage room with modular shelving, desk setup, and light placement studied for realistic interior lighting.",
    tech: ["BLENDER", "MODULAR ASSETS", "LIGHTING"],
    image: work5.url,
    alt: "Blender scene of an industrial storage room with shelving and a desk",
  },
];

export const journey = [
  { stage: "START", title: "FIRST 3D SCENE", detail: "Opened Blender out of curiosity and never closed it again." },
  { stage: "LAP 01", title: "MODELLING FUNDAMENTALS", detail: "Topology, hard surface workflow, and clean mesh discipline." },
  { stage: "LAP 02", title: "MATERIALS & RENDERING", detail: "PBR shading, lighting setups, and render passes in Cycles." },
  { stage: "LAP 03", title: "INDUSTRIAL DESIGN", detail: "Product and vehicle concepts built with real manufacturing logic in mind." },
  { stage: "NEXT", title: "FUTURE GOALS", detail: "Study industrial design and work on production-level 3D visualization." },
];

export const contacts = [
  { label: "EMAIL", value: "farizbrother313@gmail.com", href: "mailto:farizbrother313@gmail.com" },
  { label: "WHATSAPP", value: "+62 813-1731-1277", href: "https://wa.me/6281317311277" },
  { label: "DISCORD", value: "Kecoak313", href: "https://discord.com/users/Kecoak313" },
  { label: "INSTAGRAM", value: "@azzuhri_", href: "https://instagram.com/azzuhri_" },
];

"use client";

import {
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiVuedotjs,
  SiLivewire,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techs = [
  { icon: SiLaravel,   name: "Laravel",  color: "#FF2D20" },
  { icon: SiNextdotjs, name: "Next.js",  color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js",  color: "#339933" },
  { icon: SiNestjs,    name: "NestJS",   color: "#E0234E" },
  { icon: SiReact,     name: "React",    color: "#61DAFB" },
  { icon: SiVuedotjs,  name: "Vue.js",   color: "#42B883" },
  { icon: SiLivewire,  name: "Livewire", color: "#FB70A9" },
  { icon: FaAws,       name: "AWS",      color: "#FF9900" },
  { icon: SiMysql,     name: "MySQL",    color: "#4479A1" },
];

export default function TechStack() {
  const items = [...techs, ...techs];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <span className="inline-block px-4 py-1.5 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-3">
          Tech Stack
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Tools & Technologies I Work With
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {items.map(({ icon: Icon, name, color }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3.5 mx-3 rounded-xl bg-white/[0.04] border border-white/[0.07] shrink-0 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              <Icon style={{ color }} className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

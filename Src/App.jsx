import React, { useState, useEffect } from "react";
import {
  Radio,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Menu,
  X,
  Cpu,
  BarChart3,
  Layers,
  Antenna,
  GraduationCap,
  Award,
} from "lucide-react";
import { skillGroups, stats, projects, experience, certifications } from "./data.js";
const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

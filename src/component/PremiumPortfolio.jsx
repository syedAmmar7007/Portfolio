import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const PremiumPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ projects: 0, designs: 0, tech: 0 });
  const containerRef = useRef(null);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        projects: Math.min(prev.projects + 1, 3),
        designs: Math.min(prev.designs + 1, 10),
        tech: Math.min(prev.tech + 1, 10),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Data
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      category: "UI/UX Design",
      items: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Experience",
        "Design Systems",
        "User Research",
      ],
    },
    {
      category: "WordPress",
      items: ["Custom Themes", "Theme Customization"],
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description:
        "Building fast, responsive, and interactive websites using modern frontend technologies.",
      features: [
        "React Applications",
        "Responsive Design",
        "Performance Optimization",
      ],
      icon: "⚡",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating modern user interfaces and prototypes focused on usability and user experience.",
      features: ["Figma Design", "Wireframing", "Prototyping"],
      icon: "🎨",
    },
    {
      title: "WordPress Development",
      description:
        "Creating professional business websites and custom WordPress solutions.",
      features: ["Custom Themes", "Theme Customization", "Responsive Websites"],
      icon: "🔧",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform with seamless user experience",
      category: "Web Development",
      image: "./../public/img/project 1.png",
      link: "https://myntra-clone-kappa-red.vercel.app",
      tech: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Resturant Website",
      description: "Analytics dashboard with modern UI/UX design",
      category: "UI/UX Design",
      image: "./../public/img/project 2.png",
      link: "https://www.behance.net/gallery/251817963/food-web-(UI-Design))",
      tech: ["Figma", "Design System", ],
    },
    {
      id: 3,
      title: "Sales & Analytics Website",
      description: "Professional WordPress corporate website",
      category: "WordPress",
      image: "./../public/img/project 3.png",
      link: "https://sales-analytics-website.vercel.app/",
      tech: ["WordPress", "Custom Theme", "SEO Optimization"],
    },
    {
      id: 4,
      title: "School Website",
      description: "Interactive agency website with smooth animations",
      category: "Web Development",
      image: "./../public/img/project 4.png",
      link: "https://emptus-school-web.vercel.app/",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "GYM Website",
      description: "End-to-end mobile application UI design",
      category: "UI/UX Design",
      image: "./../public/img/project 5.png",
      link: "https://www.behance.net/gallery/251817355/GYM-web-(UI-design)",
      tech: ["Figma", "Mobile Design", "User Testing"],
    },
    {
      id: 6,
      title: "Home Interior Website",
      description: "E-learning WordPress platform with course management",
      category: "UI/UX Design",
      image: "./../public/img/project 6.png",
      link: "https://www.behance.net/gallery/251818283/Interior-web-(UI-design)",
      tech: ["Figma", "Mobile Design", "User Testing"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0B0B0B]/50 backdrop-blur-md border-b border-[#D4D4D4]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight"
          >
            Syed Ammar
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
              (item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ color: "#C6FF00" }}
                  className="text-[#A3A3A3] hover:text-[#C6FF00] transition font-medium text-sm"
                >
                  {item}
                </motion.button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#141414]/90 backdrop-blur-md border-t border-[#D4D4D4]/10"
            >
              <div className="flex flex-col gap-4 p-6">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Services",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-[#A3A3A3] hover:text-[#C6FF00] font-medium text-sm text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#C6FF00]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              I Build Digital
              <br />
              <span className="text-[#C6FF00]">Experiences</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#A3A3A3] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
            Developer and designer creating responsive websites, interactive
              interfaces, and modern digital experiences.
            </motion.p>

            {/* Animated Roles */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap mb-12"
            >
              {[
                "Frontend Developer",
                "UI/UX Designer",
                "WordPress Developer",
              ].map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="px-4 py-2 border border-[#D4D4D4]/30 rounded-full text-sm text-[#A3A3A3] backdrop-blur-sm"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center flex-wrap"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(198, 255, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-[#C6FF00] text-black font-bold rounded-lg hover:bg-[#E0FF33] transition flex items-center gap-2 group"
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRight size={20} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-[#C6FF00] text-[#C6FF00] font-bold rounded-lg hover:bg-[#C6FF00]/10 transition"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-40 right-20 w-24 h-24 border border-[#C6FF00]/30 rounded-lg"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 left-20 w-16 h-16 border border-[#C6FF00]/20 rounded-full"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-[#C6FF00]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="./public/img/My Pic 2.png"
                alt=""
                className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/20 to-transparent rounded-2xl backdrop-blur-sm border border-[#D4D4D4]/20 flex items-center justify-center"
              />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-[#C6FF00]/10 rounded-lg border border-[#C6FF00]/30"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6">
                About <span className="text-[#C6FF00]">Me</span>
              </h2>
              <p className="text-[#A3A3A3] text-lg mb-6 leading-relaxed">
                I am a Frontend Developer,Web Designer & UI/UX Designer focused
                on creating beautiful, functional, and user-friendly digital
                experiences. With expertise in modern technologies and design
                principles, I help brands establish a strong digital presence.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  // { label: "Projects Delivered", value: "5+" },
                  // { label: "Client Satisfaction", value: "100%" },
                  { label: "Years Experience", value: "1" },
                  { label: "Technologies", value: "15+" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1A1A1A] border border-[#D4D4D4]/20 rounded-lg p-4"
                  >
                    <div className="text-2xl font-bold text-[#C6FF00] mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-[#A3A3A3]">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              My <span className="text-[#C6FF00]">Skills</span>
            </h2>
            <p className="text-[#A3A3A3] text-lg">
              Expertise across modern technologies and design tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-[#1A1A1A] border border-[#D4D4D4]/20 rounded-xl p-8 hover:border-[#C6FF00]/30 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-[#C6FF00]">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(198, 255, 0, 0.1)",
                      }}
                      className="px-3 py-1.5 bg-[#141414] border border-[#D4D4D4]/20 rounded-full text-sm text-[#A3A3A3] hover:border-[#C6FF00]/50 transition cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 relative overflow-hidden bg-[#141414]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              My <span className="text-[#C6FF00]">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-[#1A1A1A] border border-[#D4D4D4]/20 rounded-xl p-8 hover:border-[#C6FF00]/50 hover:bg-[#1A1A1A]/80 transition duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-[#A3A3A3] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[#A3A3A3]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C6FF00] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Featured <span className="text-[#C6FF00]">Projects</span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4 justify-center mb-12 flex-wrap"
          >
            {["All", "Web Development", "UI/UX Design", "WordPress"].map(
              (filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full font-semibold transition ${
                    activeFilter === filter
                      ? "bg-[#C6FF00] text-black"
                      : "bg-[#1A1A1A] border border-[#D4D4D4]/30 text-[#A3A3A3] hover:border-[#C6FF00]/50"
                  }`}
                >
                  {filter}
                </motion.button>
              ),
            )}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group bg-[#1A1A1A] border border-[#D4D4D4]/20 rounded-xl overflow-hidden hover:border-[#C6FF00]/30 transition duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 bg-[#141414]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="text-[#C6FF00]" size={40} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#C6FF00] font-semibold text-sm mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[#A3A3A3] text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-[#141414] px-2.5 py-1 rounded border border-[#D4D4D4]/20 text-[#A3A3A3]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: "Projects Completed", value: stats.projects },
              { label: "UI Designs", value: stats.designs },
              { label: "Technologies Mastered", value: stats.tech },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#C6FF00] mb-2">
                  {stat.value}+
                </div>
                <p className="text-[#A3A3A3] text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6FF00] rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Have an idea?
              <br />
              <span className="text-[#C6FF00]">
                Let's create something amazing
              </span>
            </h2>
            <p className="text-[#A3A3A3] text-lg mb-12 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about
              digital experiences, I'd love to hear from you.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <motion.a
                href="syedammar7007@gmail.com"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(198, 255, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#C6FF00] text-black font-bold rounded-lg hover:bg-[#E0FF33] transition flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-[#C6FF00] text-[#C6FF00] font-bold rounded-lg hover:bg-[#C6FF00]/10 transition flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/syed-ammar-ahmed-a4a913309"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-[#C6FF00] text-[#C6FF00] font-bold rounded-lg hover:bg-[#C6FF00]/10 transition flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4D4D4]/10 py-12 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2"> Syed Ammar</h3>
              <p className="text-[#A3A3A3] text-sm">
                Thanks for visiting my portfolio. I’m passionate about creating
                modern, meaningful, and user-focused digital experiences. I
                enjoy turning ideas into clean designs and functional websites
                that leave a lasting impression. Let’s connect and build
                something amazing together.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm text-[#A3A3A3]">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#C6FF00] transition text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-[#C6FF00] transition text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#C6FF00] transition text-left"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Social</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/syedAmmar7007" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/syed-ammar-ahmed-a4a913309",
                  },
                  { icon: Mail, href: "mailto:syedammar7007@gmail.com" },
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#C6FF00" }}
                    className="text-[#A3A3A3] hover:text-[#C6FF00] transition"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4D4D4]/10 pt-8 text-center text-[#A3A3A3] text-sm">
            <p>
              © 2026 Syed Ammar. Built with React, Tailwind CSS & Framer Motion.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;

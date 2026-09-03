"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Brain,
} from "lucide-react";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiC,
  SiCplusplus,
} from "react-icons/si";

function LinkedinIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

export default function Home() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "C",
      icon: <SiC />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "AI / ML",
      icon: <Brain />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Shopping Website API with WhatsApp",
      description:
        "I have developed this website for my client to provide shopping website links to their customers and increase sales.",
      image: "/image4.png",
    },
    {
      id: 2,
      title: "Twin Vision",
      description:
        "Developed this website for presenting client projects and showcasing our work.",
      image: "/image5.png",
    },
    {
      id: 3,
      title: "Smart Home Device with Bluetooth",
      description:
        "Developed a smart home device with Bluetooth connectivity and practical automation features.",
      image: "/image6.png",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Cyber Security Training",
      image: "/i1.png",
    },
    {
      id: 2,
      name: "Adobe HACKATHON",
      image: "/i7.png",
    },
    {
      id: 3,
      name: "spring Infoysis",
      image: "/i3.png",
    },
    {
      id: 4,
      name: "Fundamental of ML",
      image: "/i4.png",
    },
    {
      id: 5,
      name: "Tech veda",
      image: "/i5.png",
    },
    
  ];

  return (
    <main
      id="home"
      className="bg-black text-neutral-200 min-h-screen px-6 md:px-16 scroll-smooth"
    >

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-4">

        <div
          className="
            max-w-7xl
            mx-auto
            rounded-2xl
            border
            border-white/10
            bg-black/70
            backdrop-blur-xl
            px-5
            py-4
            shadow-[0_0_30px_rgba(37,99,235,0.12)]
          "
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Logo */}

            <a
              href="#home"
              className="text-xl font-bold tracking-wide text-white"
            >
              HASRAT <span className="text-blue-500">KAUR...</span>
            </a>


            {/* Navigation */}

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">

              <a
                href="#home"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#certifications"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Certifications
              </a>

              <a
                href="#contact"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen py-32 gap-20 overflow-hidden">

        {/* Background Glow */}

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.18),transparent_35%)]" />


        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <p className="tracking-[0.35em] uppercase text-blue-400 text-sm mb-6">
            AI/ML Engineer & Full-Stack Developer
          </p>


          <h1 className="leading-none font-extrabold">

            <span className="block text-6xl md:text-8xl text-white">
              HASRAT
            </span>

            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              KAUR
            </span>

          </h1>


          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl">
            B.Tech CSE Student at LPU — AI/ML Enthusiast — Full-Stack Developer.
            Building intelligent and scalable applications.
          </p>


          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500 transition"
            >
              Contact Me
            </a>

            <a
              href="#certifications"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500 transition"
            >
              Certifications
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500 transition"
            >
              View CV
            </a>

          </div>


          {/* Download CV Card */}

          <div className="mt-8 w-fit bg-[#08111f] border border-blue-500/20 rounded-2xl px-6 py-5">

            <h3 className="font-semibold text-white">
              Download CV
            </h3>

            <p className="text-sm text-neutral-400 mt-1">
              Get my resume in PDF format
            </p>

          </div>


          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">
                2+
              </h3>

              <p className="text-neutral-400">
                Projects
              </p>
            </div>


            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">
                2+
              </h3>

              <p className="text-neutral-400">
                Years Learning
              </p>
            </div>


            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">
                10+
              </h3>

              <p className="text-neutral-400">
                Technologies
              </p>
            </div>


            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">
                4+
              </h3>

              <p className="text-neutral-400">
                Certificates
              </p>
            </div>

          </div>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[500px]"
        >

          {/* Blue Ambient Glow */}

          <div className="absolute -inset-10 bg-blue-600/20 blur-[90px] rounded-full" />


          {/* Glass Card */}

          <div
            className="
              relative
              rounded-[36px]
              border border-white/20
              bg-white/[0.06]
              backdrop-blur-xl
              p-4
              shadow-[0_0_80px_rgba(37,99,235,0.25)]
              overflow-hidden
            "
          >

            {/* Top Blue Glow */}

            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-blue-500/30 blur-[70px] rounded-full" />


            {/* Image */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10">

              <Image
                src="/PHOTO.png"
                alt="Hasrat Kaur"
                width={500}
                height={650}
                priority
                className="object-cover w-full h-auto"
              />

            </div>


            {/* Profile Information Card */}

            <div
              className="
                relative
                mt-4
                rounded-2xl
                border border-white/10
                bg-black/40
                backdrop-blur-lg
                px-5
                py-4
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-white font-semibold text-lg">
                    Hasrat Kaur
                  </h3>

                  <p className="text-blue-400 text-sm mt-1">
                    AI/ML • Full-Stack Development
                  </p>

                </div>


                <div className="flex items-center gap-2">

                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

                  <span className="text-xs text-neutral-400">
                    Available
                  </span>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        className="py-24 text-center border-t border-neutral-900 scroll-mt-28"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          About Me
        </h2>


        <p className="text-neutral-400 max-w-4xl mx-auto leading-relaxed text-lg">

          I’m a driven and enthusiastic B.Tech Computer Science student at
          Lovely Professional University, passionate about AI/ML, Full-Stack
          Development, and emerging technologies. I love exploring how
          technology can be used to solve real-world problems and am always
          eager to learn something new, experiment with ideas, and push my
          technical boundaries.

          <br />
          <br />

          For me, development is more than just writing code — it’s about
          building, creating, solving, and constantly improving. I enjoy taking
          an idea from concept to a working solution and challenging myself to
          make every project better than the last.

          <br />
          <br />

          I’m a curious learner with a strong growth mindset, a passion for
          technology, and an eagerness to take on new challenges. I’m excited
          about the future of technology and determined to keep learning,
          building, and creating things that make an impact.

        </p>

      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section
        id="projects"
        className="py-24 border-t border-neutral-900 scroll-mt-28"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Projects
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.02,
                borderColor: "#ffffff",
              }}
              className="
                relative
                bg-neutral-950
                border
                border-neutral-800
                p-6
                rounded-2xl
                transition
              "
            >

              {/* Project Image */}

              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="
                  rounded-xl
                  w-full
                  object-cover
                  border
                  border-neutral-900
                "
              />


              <h3 className="text-xl font-semibold mt-4 text-white pr-12">
                {project.title}
              </h3>


              <p className="text-neutral-400 mt-2 text-sm">
                {project.description}
              </p>


              {/* GITHUB ICON - PROJECT CORNER */}

              <a
                href="https://github.com/hasratthind0213"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="
                  absolute
                  right-5
                  bottom-5
                  w-11
                  h-11
                  rounded-full
                  border
                  border-neutral-700
                  bg-black
                  flex
                  items-center
                  justify-center
                  text-neutral-300
                  hover:text-white
                  hover:border-blue-500
                  hover:bg-blue-500/10
                  transition
                  shadow-lg
                "
              >

                <FaGithub size={22} />

              </a>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}

      <section
        id="skills"
        className="py-24 text-center border-t border-neutral-900 scroll-mt-28"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Skills
        </h2>

        <p className="text-neutral-500 mb-12">
          Technologies I use to build, experiment and create.
        </p>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">

          {skills.map((skill) => (

            <motion.div
              key={skill.name}
              whileHover={{
                y: -7,
                scale: 1.03,
              }}
              className="
                group
                min-h-[170px]
                flex
                flex-col
                items-center
                justify-center
                gap-5
                rounded-3xl
                border
                border-neutral-800
                bg-[#08111f]
                hover:border-blue-500/60
                hover:bg-[#0b1728]
                transition
                shadow-[0_0_25px_rgba(37,99,235,0.04)]
              "
            >

              {/* Skill Logo */}

              <div
                className="
                  text-5xl
                  md:text-6xl
                  text-blue-400
                  group-hover:text-blue-300
                  transition
                "
              >
                {skill.icon}
              </div>


              {/* Skill Name */}

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= CERTIFICATIONS SECTION ================= */}

      <section
        id="certifications"
        className="py-24 border-t border-neutral-900 scroll-mt-28"
      >

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications
          </h2>

          <p className="text-neutral-500 mt-4">
            Courses, achievements and certifications I have completed.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {certifications.map((certificate) => (

            <motion.div
              key={certificate.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                relative
                rounded-3xl
                border
                border-neutral-800
                bg-neutral-950
                overflow-hidden
                hover:border-blue-500/50
                transition
              "
            >

              {/* Certificate Image */}

              <div className="relative aspect-[4/3] overflow-hidden bg-[#08111f]">

                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>


              {/* Certificate Name */}

              <div className="p-5">

                <h3 className="text-lg font-semibold text-white">
                  {certificate.name}
                </h3>

                <p className="text-sm text-neutral-500 mt-2">
                  View certification
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

{/* ================= TRENDING CONTACT SECTION ================= */}

<section
  id="contact"
  className="relative py-28 border-t border-neutral-900 scroll-mt-28 overflow-hidden"
>

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />


  <div className="relative max-w-6xl mx-auto">

    {/* Section Heading */}

    <div className="mb-14">

      <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-5">
        Get In Touch
      </p>

      <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Let’s Build
        <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
          Something Great.
        </span>
      </h2>

      <p className="mt-6 text-neutral-400 max-w-2xl text-lg leading-relaxed">
        Have an idea, project, internship opportunity, or just want to
        connect? I’m always excited to meet new people, explore new
        opportunities, and turn ideas into something meaningful.
      </p>

    </div>


    {/* Main Contact Grid */}

    <div className="grid lg:grid-cols-2 gap-8">


      {/* LEFT — Availability Card */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-8
          md:p-10
          overflow-hidden
        "
      >

        {/* Glow */}

        <div className="absolute -right-20 -top-20 w-56 h-56 bg-blue-600/20 blur-[80px] rounded-full" />


        <div className="relative">

          {/* Status */}

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 mb-10">

            <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

            <span className="text-sm text-green-400">
              Available for opportunities
            </span>

          </div>


          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Let’s create something
            <span className="text-blue-400"> impactful.</span>
          </h3>


          <p className="text-neutral-400 mt-5 leading-relaxed">
            I’m currently focused on growing my skills in AI/ML and
            Full-Stack Development and would love to collaborate on
            innovative projects, internships, and exciting ideas.
          </p>


          {/* Quick Info */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                📍
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  Location
                </p>

                <p className="text-white mt-1">
                  Punjab, India
                </p>
              </div>

            </div>


            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                ⚡
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  Focus
                </p>

                <p className="text-white mt-1">
                  AI/ML • Full-Stack Development
                </p>
              </div>

            </div>

          </div>


          {/* Bottom Text */}

          <div className="mt-12 pt-8 border-t border-white/10">

            <p className="text-neutral-500 text-sm">
              Have an idea?
            </p>

            <p className="text-xl text-white font-semibold mt-1">
              Let’s turn it into reality →
            </p>

          </div>

        </div>

      </motion.div>



      {/* RIGHT — Contact Links */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          rounded-[30px]
          border
          border-white/10
          bg-[#08111f]/80
          backdrop-blur-xl
          p-6
          md:p-8
        "
      >

        <p className="text-sm text-neutral-500 uppercase tracking-[0.25em] mb-6">
          Connect With Me
        </p>


        <div className="space-y-4">


          {/* EMAIL */}

          <a
            href="mailto:hasratthind30@gmail.com"
            className="
              group
              flex
              items-center
              justify-between
              p-5
              rounded-2xl
              border
              border-neutral-800
              bg-black/30
              hover:border-blue-500/50
              hover:bg-blue-500/5
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
                text-xl
              ">
                ✉
              </div>

              <div>

                <p className="text-xs text-neutral-500">
                  Email
                </p>

                <p className="text-white mt-1">
                  hasratthind30@gmail.com
                </p>

              </div>

            </div>


            <ArrowUpRight
              size={20}
              className="
                text-neutral-600
                group-hover:text-blue-400
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition
              "
            />

          </a>



          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/hasrat-thind-a174a3393"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              p-5
              rounded-2xl
              border
              border-neutral-800
              bg-black/30
              hover:border-blue-500/50
              hover:bg-blue-500/5
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
                text-blue-400
              ">

                <LinkedinIcon size={22} />

              </div>

              <div>

                <p className="text-xs text-neutral-500">
                  LinkedIn
                </p>

                <p className="text-white mt-1">
                  Connect with me
                </p>

              </div>

            </div>


            <ArrowUpRight
              size={20}
              className="
                text-neutral-600
                group-hover:text-blue-400
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition
              "
            />

          </a>



          {/* GITHUB */}

          <a
            href="https://github.com/hasratthind0213"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              p-5
              rounded-2xl
              border
              border-neutral-800
              bg-black/30
              hover:border-blue-500/50
              hover:bg-blue-500/5
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
                text-blue-400
              ">

                <FaGithub size={24} />

              </div>

              <div>

                <p className="text-xs text-neutral-500">
                  GitHub
                </p>

                <p className="text-white mt-1">
                  Explore my projects
                </p>

              </div>

            </div>


            <ArrowUpRight
              size={20}
              className="
                text-neutral-600
                group-hover:text-blue-400
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition
              "
            />

          </a>



          {/* PHONE */}

          <a
            href="tel:+917888348577"
            className="
              group
              flex
              items-center
              justify-between
              p-5
              rounded-2xl
              border
              border-neutral-800
              bg-black/30
              hover:border-blue-500/50
              hover:bg-blue-500/5
              transition
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
                text-xl
              ">
                ☎
              </div>

              <div>

                <p className="text-xs text-neutral-500">
                  Phone
                </p>

                <p className="text-white mt-1">
                  +91 78883 48577
                </p>

              </div>

            </div>


            <ArrowUpRight
              size={20}
              className="
                text-neutral-600
                group-hover:text-blue-400
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition
              "
            />

          </a>

        </div>

      </motion.div>

    </div>

  </div>

</section>
      {/* ================= FOOTER ================= */}

      <footer
        className="
          text-center
          py-10
          text-neutral-600
          border-t
          border-neutral-900
        "
      >

        © {new Date().getFullYear()} Hasrat Kaur. All rights reserved.

      </footer>


      {/* ================= FIXED LINKEDIN BUTTON ================= */}

      <a
        href="https://www.linkedin.com/in/hasrat-thind-a174a3393"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Hasrat Kaur LinkedIn profile"
        className="
          fixed
          right-6
          bottom-6
          z-50
          w-14
          h-14
          rounded-full
          bg-blue-600
          border
          border-blue-400/50
          flex
          items-center
          justify-center
          text-white
          shadow-[0_0_30px_rgba(37,99,235,0.5)]
          hover:bg-blue-500
          hover:scale-110
          transition
        "
      >

        <LinkedinIcon size={25} />

      </a>

    </main>
  );
}
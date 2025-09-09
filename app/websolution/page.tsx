"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";
import { useState, useMemo } from "react";
import { BarChart3, Box, Search, Filter, X } from "lucide-react";
import ContactPage from "@/components/ContactUs";

const solutions = [
  "Custom / personalized websites, landing pages development.",
  "Web components and web related projects for SMB.",
  "Responsive design and optimization design of wireframe UI/UX.",
  "Contract base web projects.",
];

interface Project {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  date: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "ShipLink – Smart, Competitive & Flexible Shipping Platform",
    description:
      "ShipLink is a modern shipping and logistics platform that bridges the gap between people who need to ship products and shippers looking for delivery jobs.",
    link: "https://shiplink.onrender.com/",
    image: "/shiplink.png",
    date: "April 2, 2025",
    tags: ["Logistics", "Platform", "Full-stack"],
  },
  {
    title: "AI-Powered Task Management System",
    description:
      "Smart task manager with AI-driven features like smart assistant, sentiment analysis and many more... Features include visual analytics and a modern responsive UI.",
    image: "/task.png",
    link: "https://github.com/manavlade/Task-Management-App",
    date: "Present",
    tags: ["AI", "Productivity", "Dashboard"],
  },
  {
    title: "TailTenders - AI-Powered Personal Stylist",
    description:
      "Developed a smart fashion recommendation platform using AI to provide personalized outfit suggestions.",
    link: "https://trialtailtender-xiab.one.vercel.app/",
    image: "/tailtenders.png",
    date: "Feb 22, 2025",
    tags: ["AI", "Fashion", "E-commerce"],
  },
  {
    title: "CodeBuddy - Developer Social Media",
    description:
      "Built a full-stack social platform for developers with real-time chat functionality.",
    link: "https://codebuddy-gamma.vercel.app",
    image: "/codebuddy.png",
    date: "Aug 2022",
    tags: ["Social Media", "Real-time", "Developer Tools"],
  },
  {
    title: "CopyTail",
    description: "Copy Tail Components.",
    link: "https://copytail.vercel.app/",
    image: "/copytail.png",
    date: "Feb 2023",
    tags: ["UI Components", "Design System"],
  },
  {
    title: "ShipSnap",
    description: "Track Your Packages Like Never Before",
    link: "https://ship-snap-track.vercel.app/",
    image: "/shipsnap.png",
    date: "Feb 2023",
    tags: ["Logistics", "Tracking"],
  },
  {
    title: "Footique",
    description: "Your Virtual FootWear web app.",
    link: "https://footify-commerce-133cddb3-j686.vercel.app/",
    image: "/footique.png",
    date: "Feb 2023",
    tags: ["E-commerce", "Fashion"],
  },
  {
    title: "WeatherWear",
    description:
      "Our Ultimate Travel Companion and Style Guide, Weather-Based Outfit Suggestion.",
    link: "https://weatherwear-orcin.vercel.app/",
    image: "/weatherwear.png",
    date: "Apr 2023",
    tags: ["Weather", "Fashion", "Travel"],
  },
  {
    title: "LearnNova",
    description:
      "Simplify and enhance web user life through powerful tools tailored for academic and personal development.",
    link: "https://learnnova-9fgg.vercel.app",
    image: "/learnnova.png",
    date: "Jun 2023",
    tags: ["Education", "Productivity"],
  },
  {
    title: "Thumbnail Board Center",
    description:
      "A platform designed to simplify the creation and management of image thumbnails for websites, social media, and other digital content.",
    link: "https://thumbnail-hub-lemg.vercel.app",
    image: "/thumbnailboard.png",
    date: "Jul 2023",
    tags: ["Media", "Content Creation"],
  },
  {
    title: "Child Rights Platform",
    description:
      "An innovative platform for children to help learn about their rights through games.",
    image: "/Childrights.jpg",
    link: "https://github.com/manavlade/Child-Rights-Portal",
    date: "Present",
    tags: ["Education", "Gamification", "Social Good"],
  },
  {
    title: "Velvet Visions Hotel",
    description:
      "A modern, responsive, and elegant hotel portfolio website showcasing rooms, amenities, booking options, and contact details.",
    image: "/velvet-hotel.png",
    link: "https://velvet-visions-hotel.vercel.app/",
    date: "Present",
    tags: ["Hotel", "Hospitality", "Booking"],
  },
  {
    title: "Paradise Portfolio Resort",
    description:
      "A luxury resort portfolio website highlighting accommodations, experiences, amenities, and a smooth booking flow with premium design.",
    image: "/paradise-resort.jpg",
    link: "https://paradise-portfolio-suite.vercel.app/",
    date: "Present",
    tags: ["Resort", "Hospitality", "Booking"],
  },
  {
    title: "Vajrabhushana - Virtual Jewelry Platform",
    description:
      "An innovative online virtual jewelry platform leveraging AR technology. Users can try on exquisite jewelry pieces in real-time via webcam or photo upload, explore customizable options, and shop seamlessly online.",
    image: "/vajrabhushana.png",
    link: "https://lnkd.in/dWS3GcyU",
    date: "Present",
    tags: ["E-commerce", "AR", "Jewelry", "Virtual Try-on"],
  },
];

// Extract all unique tags from projects
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

export default function WebSolution() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Filter by selected tags
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const projectsToShow = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const handleToggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery !== "" || selectedTags.length > 0;

  return (
    <div className="min-h-screen pt-[60px] bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <CustomNavbar />

      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Online Presence with AI-Driven Web Development
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              At{" "}
              <span className="font-semibold text-purple-400">Illusion AI</span>
              , we harness the power of artificial intelligence to craft
              personalized web solutions that enhance user experience and
              streamline operations. Our innovative approach ensures your
              website is not only visually stunning but also highly efficient
              and tailored to your unique business needs.
            </p>

            <div className="grid gap-4">
              {solutions.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 transition-all duration-300"
                >
                  <Box className="text-purple-400 w-6 h-6" />
                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
            <Image
              src="/websolution.jpg"
              alt="Web Solution"
              width={600}
              height={450}
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase Section with Filters */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-[90%] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Our Web Development Projects
          </motion.h2>

          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore our diverse portfolio of web solutions across various industries and technologies.
          </p>

          {/* Filters Section */}
          <div className="mb-12 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/30 rounded-lg transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filter by Tags</span>
                {selectedTags.length > 0 && (
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {selectedTags.length}
                  </span>
                )}
              </button>
            </div>

            {/* Active filters indicator */}
            {hasActiveFilters && (
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-300">Active filters:</span>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  )}
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="ml-1 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-400 hover:text-white underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}

            {/* Tags filter panel */}
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <h3 className="text-lg font-medium text-gray-300 mb-3">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-purple-500 text-white"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing {projectsToShow.length} of {filteredProjects.length} projects
              {filteredProjects.length !== projects.length &&
                ` (filtered from ${projects.length} total)`}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsToShow.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={600}
                          className="object-cover group-hover:scale-105 p-2 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-5 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-sm text-gray-400">
                            {project.date}
                          </span>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
                          >
                            View Live
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProjects.length > 6 && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleToggleProjects}
                    className="px-6 py-3 bg-transparent border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/10 transition-colors"
                  >
                    {isExpanded ? "Show Less Projects" : "View More Projects"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No projects match your filters.</div>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-md transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <div id="contactus">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}
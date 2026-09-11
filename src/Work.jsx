import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kandy Lake Club",
    types: ["Website", "Booking System"],
    image: "/work/lakeclub.png",
    description:
      "A modern and user-friendly website designed to promote Sri Lanka’s traditional cultural dance performances and manage online bookings.",
    topics: [
      "Sri Lankan Cultural Dance",
      "Online Ticket Booking",
      "Event & Performance Management",
      "Tourism Promotion",
    ],
    features: [
      "Online booking and seat reservation system",
      "Detailed performance and show information",
      "Showcases Kandyan, folk, drumming, and fire dances",
      "Responsive design for all devices",
      "Clear venue details and contact information",
    ],
    link: "https://www.kandylakeclubdance.com/",
  },
  {
  id: 2,
  title: "Mountain Breeze Hotel",
  types: ["Website", "Hotel Booking System"],
  image: "/work/mountainbreeze.png",
  description:
    "A clean and visually appealing website designed to showcase a luxury hillside hotel in Sri Lanka, providing seamless room booking and promoting a relaxing nature getaway experience.",
  topics: [
    "Hotel & Hospitality",
    "Online Room Booking",
    "Tourism & Travel",
    "Nature Retreat Experience",
  ],
  features: [
    "Online room reservation and booking system",
    "Detailed room categories with pricing and amenities",
    "High-quality visuals showcasing scenic mountain views",
    "Responsive design optimized for mobile and desktop",
    "Information on facilities, dining, and hotel services",
    "Contact details and location integration for easy navigation",
  ],
  link: "https://www.hotelmountainbreeze.com/",
  },
  {
    id: 3,
    title: "Hotel Hibiscus",
    types: ["Website", "Online Reservation"],
    image: "/work/hibiscus.png",
    description:
      "The Hibiscus Beach Hotel website presents an idyllic beachfront resort located in Kalutara, Sri Lanka. It offers visitors a complete view of accommodation options including deluxe rooms and villas, along with details about hotel facilities such as swimming pools, spa services, fitness centre, and dining options. The site provides easy access to reservation and contact information, allowing guests to book stays, explore amenities, and plan their beach getaway in a tropical setting",
    topics: [
    "Hotel Website Architecture",
    "Online Reservation Information Flow",
    "Content Management for Rooms & Villas",
    "Tourism & Hospitality UX Design",
    "Responsive Web Development",
    "SEO-Friendly Page Structure",
    ],
    features: [
    "Custom-designed hotel website with clear content hierarchy",
    "Well-structured pages for rooms, villas, dining, and facilities",
    "Responsive layout optimized for mobile, tablet, and desktop devices",
    "Optimized image galleries for fast loading and visual appeal",
    "Clear call-to-action elements for reservations and inquiries",
    "SEO-optimized structure to improve search engine visibility",
    ],

        link: "https://www.hibiscusbeachhotel.com/",
  },
  {
    id: 4,
    title: "EWB Jewellers",
    types: ["Website", "E-Commerce"],
    image: "/work/ewb.png",
    description:
      "The EWB Jewel website is a refined and visually elegant digital platform created to showcase luxury handcrafted jewellery. The site presents detailed collections of rings, pendants, earrings, and gemstones with a strong focus on craftsmanship, material quality, and brand identity. Designed with a responsive and user-friendly layout, the website enhances product presentation through high-quality visuals and well-structured content, helping the brand engage both local and international audiences while maintaining a premium online presence.",
    topics: [
    "Jewellery Catalogue Display",
    "Responsive Web Design for Online Showcase",
    "Product Information & Categorization",
    "Gem & Material Descriptions",
    "User Engagement Features (Newsletter Signup)",
    "Tourism & Brand Identity Integration",
    ],

    features: [
        "Dynamic category pages for rings, pendants, earrings, and gemstones",
        "Responsive layout optimized for mobile, tablet, and desktop",
        "High-quality media presentation for luxury jewellery items",
        "Detailed product descriptions with craftsmanship insights",
        "Newsletter subscription integration for audience engagement",
        "Clear contact information and business identity presentation",
        ],

    link: "https://www.ewbjewel.com/ewbnew/",
  },
  {
    id: 5,
    title: "Siemen Gems and Jewellers",
    types: ["Website","E-Commerce"],
    image: "/work/siemen.png",
    description:
      "The Siemen Gems and Jewellers website is a modern and visually engaging online platform designed to showcase a curated collection of luxury jewellery and gemstones. The site presents product categories such as rings, necklaces, bracelets, and precious stones with rich visuals and detailed information. Built with a responsive layout, it ensures an intuitive browsing experience on all devices and allows visitors to explore products, view craftsmanship details, and contact the business easily. The site emphasizes both performance and aesthetic quality, delivering a seamless user experience for jewellery enthusiasts and potential buyers alike.",
    topics: [
        "Jewellery Catalogue & Product Display",
        "Responsive Web Design for Luxury Brand",
        "Visual Storytelling Through High-Quality Imagery",
        "Product Categorization & Detailing",
        "User Engagement & Contact Integration",
        "Brand Identity Presentation",
        ],


    features: [
    "Clean and modern jewellery showcase layout",
    "Responsive design optimized for mobile, tablet, and desktop",
    "High-resolution product imagery with visual emphasis",
    "Structured content organization for categories and items",
    "Brand presentation elements showcasing craftsmanship and heritage",
    "Easy contact and inquiry access for potential customers",
    ],
    link: "https://siemen-gems-and-jewellers.vercel.app/",
  },
  {
    id: 6,
    title: "Nadula Wathurakumbura Photography",
    types: ["Website","Portfolio"],
    image: "/work/nadula.png",
    description:
      "The Nadula Wathurakumbura Photography website is a visually immersive portfolio platform showcasing the work of a professional photographer. Built with a responsive layout and intuitive navigation, the site highlights various photography categories including events, portraits, commercial shoots, fashion, and graduation sessions. It provides visitors with a rich gallery experience, detailed service descriptions, and an easy “Get a Quote” contact form to book sessions. The design emphasizes visual storytelling, performance, and accessibility across devices.",
    topics: [
    "Photographer Portfolio Showcase",
    "Responsive Image Gallery",
    "Service Listing & Descriptions",
    "Contact & Quote Submission Form",
    "Brand Storytelling Through Visuals",
    "Multi-Category Photography Display",
    ],


    features: [
    "Responsive layout for galleries, services, and contact pages",
    "High-quality image grid showcasing diverse photography work",
    "Clear service categories including event, commercial, portrait, and editorial shoots",
    "User-friendly contact form for quote requests",
    "Visual emphasis on storytelling and emotion through photos",
    "Accessible navigation for easy browsing across desktop and mobile",
    ],



    link: "https://nadulawathurakumburaphotography.netlify.app/",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work"
      className="relative w-full py-16 text-white overflow-hidden"
    >
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.06),transparent_60%)]" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-semibold mb-4">
            Our <span className="text-[#FF8C00]">Work</span>
          </h2>
          <p className="font-body text-[#AAB8C2] max-w-2xl mx-auto">
            Selected projects showcasing our expertise across web, IoT, and
            automation technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)}
              className="
                cursor-pointer
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-2xl overflow-hidden
                hover:border-[#FF8C00]/40
                transition
              "
            >
              {/* Cover Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Type Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.types.map((type, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-[#FF8C00]/90 text-black font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#AAB8C2]">
                  Click to view project details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL — FULL SCREEN (UNCHANGED) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                relative bg-black
                border border-white/15
                rounded-2xl
                max-w-2xl w-full mx-4
                max-h-[85vh]
                overflow-hidden
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="
                  absolute top-3 right-3 z-20
                  w-8 h-8 rounded-full
                  bg-black/60 border border-white/20
                  flex items-center justify-center
                  text-white/70 hover:text-white
                  hover:border-white/40
                  transition
                "
                aria-label="Close modal"
              >
                <X size={14} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[85vh]">

                {/* Modal Image */}
                <div className="relative h-60">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {activeProject.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-[#FF8C00]/90 text-black font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    {activeProject.title}
                  </h3>

                  <p className="font-body text-[#AAB8C2] mb-6 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {activeProject.topics && (
                    <div className="mb-6">
                      <h4 className="font-display text-lg mb-3">
                        Topics Covered
                      </h4>
                      <ul className="list-disc list-inside text-[#AAB8C2] space-y-1">
                        {activeProject.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProject.features && (
                    <div className="mb-8">
                      <h4 className="font-display text-lg mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[#AAB8C2]"
                          >
                            <span className="text-[#FF8C00] mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      px-5 py-3 rounded-xl
                      bg-[#FF8C00] text-black font-medium
                      hover:bg-[#ff9f26]
                      transition
                    "
                  >
                    Visit Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

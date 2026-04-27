import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  popular: boolean;
  category: string;
}

/* ------------------ UNSPLASH IMAGES ------------------ */
const services: Service[] = [
  {
    title: "Hair Styling & Color",
    description: "Professional cuts, coloring, and styling treatments",
    image: "https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?w=800&h=600&fit=crop",
    popular: false,
    category: "Hair",
  },
  {
    title: "Makeup & Glam",
    description: "Full makeup for any occasion, natural to glamorous",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
    popular: true,
    category: "Makeup",
  },
  {
    title: "Nails & Manicure",
    description: "Complete nail care, manicures, and artistic designs",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
    popular: false,
    category: "Nails",
  },
  {
    title: "Skincare Treatments",
    description: "Advanced facials and skincare therapy sessions",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    popular: false,
    category: "Spa",
  },
  {
    title: "Bridal & Events",
    description: "Complete beauty packages for your special day",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
    popular: true,
    category: "Events",
  },
  {
    title: "Barber Services",
    description: "Fades, beard grooming, and precision cuts",
    image: "https://images.unsplash.com/photo-1650066701653-8afec7bca688?w=800&h=600&fit=crop",
    popular: false,
    category: "Barber",
  },
  {
    title: "Braiding & Protective Styles",
    description: "Box braids, cornrows, twists, and protective styling",
    image: "https://images.unsplash.com/photo-1768489134736-af8149e8fef1?w=800&h=600&fit=crop",
    popular: false,
    category: "Braids",
  },
];

const categories = [
  "All",
  "Hair",
  "Makeup",
  "Nails",
  "Spa",
  "Events",
  "Barber",
  "Braids",
];

const ServiceCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services" // <--- Added this ID here
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        {/* ... rest of your component remains the same ... */}
        
        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-pink-600 text-white shadow-lg"
                  : "bg-white border text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-white border shadow-lg rounded-3xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <div className="mt-auto pt-4 border-t flex justify-end">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl px-6 h-12 hover:opacity-90 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
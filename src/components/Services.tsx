import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Images
const makeupImage =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop";
const hairImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop";
const nailsImage =
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop";
const skincareImage =
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop";
const barberImage =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop";
const braidingImage =
  "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&h=600&fit=crop";

interface Service {
  title: string;
  description: string;
  image: string;
  category: string;
}

const services: Service[] = [
  {
    title: "Makeup & Styling",
    description: "Professional makeup for any occasion",
    image: makeupImage,
    category: "Makeup",
  },
  {
    title: "Hair Services",
    description: "Cuts, coloring, and styling",
    image: hairImage,
    category: "Hair",
  },
  {
    title: "Nail Care",
    description: "Manicures, pedicures, and nail art",
    image: nailsImage,
    category: "Nails",
  },
  {
    title: "Skincare & Spa",
    description: "Facials and relaxing treatments",
    image: skincareImage,
    category: "Spa",
  },
  {
    title: "Barber Services",
    description: "Fades, beard grooming, and clean cuts",
    image: barberImage,
    category: "Barber",
  },
  {
    title: "Braiding",
    description: "Box braids, cornrows, and protective styles",
    image: braidingImage,
    category: "Braids",
  },
];

const categories = ["All", "Makeup", "Hair", "Nails", "Spa", "Barber", "Braids"];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600">
            Discover top beauty services tailored to you
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden shadow-lg bg-white group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full font-semibold hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import makeupImage from "@/assets/service-makeup.jpg";
import hairImage from "@/assets/service-hair.jpg";
import nailsImage from "@/assets/service-nails.jpg";
import skincareImage from "@/assets/service-skincare.jpg";

const services = [
	{
		title: "Makeup & Styling",
		description:
			"Professional makeup for any occasion, from natural looks to glamorous events",
		image: makeupImage,
		price: "Starting at $60",
	},
	{
		title: "Hair Services",
		description:
			"Cuts, coloring, styling, treatments - all performed by certified stylists",
		image: hairImage,
		price: "Starting at $45",
	},
	{
		title: "Nail Care",
		description:
			"Manicures, pedicures, nail art, and extensions with premium products",
		image: nailsImage,
		price: "Starting at $35",
	},
	{
		title: "Skincare & Spa",
		description:
			"Facials, treatments, and relaxing spa services for glowing skin",
		image: skincareImage,
		price: "Starting at $70",
	},
];

interface ServicesProps {
	region?: string;
}

const Services: React.FC<ServicesProps> = ({ region }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="services" ref={ref} className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Featured{" "}
						<span className="text-primary">Services</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Premium beauty services delivered by certified professionals
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -8 }}
							className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-border"
						>
							{/* Image Container with Glassmorphism Overlay */}
							<div className="relative h-80 overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

								{/* Content Overlay */}
								<div className="absolute inset-0 flex flex-col justify-end p-8">
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={isInView ? { y: 0, opacity: 1 } : {}}
										transition={{ delay: index * 0.1 + 0.3 }}
									>
										<h3 className="text-3xl font-bold text-white mb-3">
											{service.title}
										</h3>
										<p className="text-white/90 text-lg mb-4 leading-relaxed">
											{service.description}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-accent font-bold text-xl">
												{service.price}
											</span>
											<button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
												Book Now
											</button>
										</div>
									</motion.div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
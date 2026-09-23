"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useGeoCountry } from "@/hooks/useGeoCountry";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface RegionData {
  phone: string;
  phoneHref: string;
  location: string;
  email: string;
}

const regionalData: Record<string, RegionData> = {
  Kenya: {
      phone: "+254 714 714 405",
      phoneHref: "tel:+254714714405",
      location: "Nairobi, Kenya",
      email: "info@pullovabeauty.com",
    },
  Nigeria: {
      phone: "+1 (253) 553-9800",
      phoneHref: "tel:+12535539800",
      location: "13 Olori Mojisola Onikoyi Banana Island ,   Ikoyi , Lagos",
      email: "info@pullovabeauty.com",
    },

  "United States": {
    phone: "+1 (253) 553-9800",
    phoneHref: "tel:+12535539800",
    location: "Seattle, Washington, USA",
    email: "info@pullovabeauty.com",
  },
  "United Kingdom": {
    phone: "+1 (253) 553-9800",
    phoneHref: "tel:+12535539800",
    location: "29 Joseph Luckman Bedworth , West Midlands , Cv12 8bh  UK",
    email: "info@pullovabeauty.com",
  },

  Global: {
    phone: "+1 (253) 553-9800",
    phoneHref: "tel:+12535539800",
    location: "Global Operations",
    email: "info@pullovabeauty.com",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  const { country } = useGeoCountry();
  console.log(JSON.stringify(country));

  const contactData =
    regionalData[country ?? "Global"] || regionalData.Global;

  // const [contactData, setContactData] = useState<RegionData>(regionalData.usa);

  // useEffect(() => {
  //   const detectRegion = async () => {
  //     try {
  //       const urlParams = new URLSearchParams(window.location.search);
  //       const testRegion = urlParams.get("region");

  //       if (testRegion === "kenya" || testRegion === "usa") {
  //         setContactData(regionalData[testRegion]);
  //         return;
  //       }

  //       const response = await fetch("/api/region");

  //       // ✅ FIX: prevent JSON crash
  //       const text = await response.text();
  //       let data;
  //       try {
  //         data = JSON.parse(text);
  //       } catch {
  //         throw new Error("Invalid JSON response");
  //       }

  //       if (data.country_code === "KE") {
  //         setContactData(regionalData.kenya);
  //       } else {
  //         setContactData(regionalData.usa);
  //       }
  //     } catch (error) {
  //       console.error("Region detection failed:", error);
  //       setContactData(regionalData.usa);
  //     }
  //   };

  //   detectRegion();
  // }, []);

const socialLinks = [
  {
    icon: Facebook,
    href: "https://web.facebook.com/profile.php?id=61584951542048",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pullovabeautyservices/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pullova-beauty-services-359a0a3a3/",
    label: "LinkedIn",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@pullovabeautyservices",
    label: "TikTok",
  },
];

  const services = [
    "Makeup & Facials",
    "Hair Services & Styling",
    "Pedicure and Manicure",
    "Eyebrow & Eyelash Services",
    "Skincare & Treatments",
    "Spa Treatments",
    "Bridal Packages",
    "Men's Grooming",
    "Barber Services",
    "Special Events",
  ];

  const company = [
    { label: "About Us", href: "/about-us" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "For Clients", href: "/client" },
    { label: "For Beauticians", href: "/beauticians" },
    { label: "For Salon Partner", href: "/salon" },
    { label: "Careers", href: "/career" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Newsletter */}
      {/* <div className="border-b border-white/10 py-16 text-center">
        <Mail className="mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <div className="flex gap-4 max-w-xl mx-auto">
          <input className="flex-1 px-4 py-3 bg-white/10 rounded-xl" />
          <Button>Subscribe</Button>
        </div>
      </div> */}

      {/* Main */}
      <div className="py-16 container mx-auto px-4 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <img src="/beautyglow_logo_white.svg" alt="Pullova Technologies logo"  width="128" height="128" className="w-32 mb-4" />
          <p className="text-gray-400 mb-6">
            Trusted beauty. Delivered on your terms.
          </p>

        <div className="flex gap-3">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            const isTikTok = s.label === "TikTok";

            return (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <Icon className={isTikTok ? "w-5 h-5" : "w-5 h-5"} />
              </a>
            );
          })}
        </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          {services.map((item, i) => (
            <div key={i} className="text-gray-400">{item}</div>
          ))}
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          {company.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.href)}
              className="block text-gray-400 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p>{contactData.email}</p>
          <p>{contactData.phone}</p>
          <p>{contactData.email}</p>
          <p>{contactData.location}</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Pullova Technologies Inc.
        </p>

        <div className="flex justify-center gap-6 mt-3">
          {legal.map((item, i) => (
            <Link key={i} to={item.href} className="text-gray-400">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
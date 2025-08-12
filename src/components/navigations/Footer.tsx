import { MapPin, Mail, Phone, Facebook, Twitter, Youtube } from "lucide-react";

type NewsItem = {
  date: string;
  title: string;
  image: string;
};

type Props = {
  companyDescription?: string;
  links?: Array<{ name: string; href: string }>;
  latestNews?: NewsItem[];
  contactInfo?: {
    address: string;
    email: string;
    phone: string;
  };
};

export const Footer = (props: Props) => {
  const defaultLinks = [
    { name: "About", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Latest Projects", href: "#" },
    { name: "News & Articles", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const defaultNews = [
    {
      date: "APRIL 25, 2025",
      title: "It Joins two pieces of metal",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      date: "APRIL 24, 2025",
      title: "The welding output is on",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const defaultContactInfo = {
    address: "88 broklyn golden street, Lagos, Nigeria",
    email: "needhelp@ayomiposi.com",
    phone: "08189192958",
  };

  const defaultDescription =
    "In the World, a major developer of A-grade commercial, industrial, and residential developments. The company has been around since its inception.";

  const links = props.links || defaultLinks;
  const latestNews = props.latestNews || defaultNews;
  const contactInfo = props.contactInfo || defaultContactInfo;
  const companyDescription = props.companyDescription || defaultDescription;

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="footer-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="text-2xl font-bold">
                <span className="text-white">Ayomiposi</span>
                <span className="text-yellow-500">Steel</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {companyDescription}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 transition-colors duration-300 text-sm tracking-wide">
                CONTACT US
              </button>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">LINKS</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-2 h-px bg-yellow-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest News */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">LATEST NEWS</h3>
              <div className="space-y-4">
                {latestNews.map((news, index) => (
                  <div
                    key={index}
                    className="flex space-x-3 group cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-16 h-16 object-cover rounded group-hover:opacity-80 transition-opacity duration-200"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-yellow-500 text-xs font-medium mb-1">
                        {news.date}
                      </p>
                      <h4 className="text-gray-300 text-sm font-medium leading-tight group-hover:text-white transition-colors duration-200">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with social media and copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © Copyright 2025 by Ayomiposi Steel
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

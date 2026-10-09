"use client";
import { useState } from "react";
import Link from "next/link";

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Shop", href: "/shop" },
    { name: "App Products", href: "/app-products" },
    { name: "Abouts Us", href: "/about-us" },
    { name: "Testimonial", href: "/testmonial" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-8">
      {navItems.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(item.name);
            }}
            className={`text-sm sm:text-[15px] transition-colors duration-200 ${
              isActive
                ? "font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5"
                : "font-normal text-slate-600 hover:text-slate-900"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;

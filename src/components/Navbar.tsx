"use client";

import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {navElements} from "@/util/data";
import {motion} from "framer-motion";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full border-b sticky top-0 z-50 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-5xl px-6 py-4">

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex justify-center items-center gap-10">
                    {navElements.map((nav) => {
                        const isActive = pathname === nav.slug;

                        return (
                            <li key={nav.slug} className="relative">
                                <motion.div
                                    whileHover={{scale: 1.05}}
                                    transition={{type: "spring", stiffness: 300}}
                                >
                                    <Link
                                        href={nav.slug}
                                        className={`text-sm font-medium transition-colors ${
                                            isActive
                                                ? "text-pink-600"
                                                : "text-gray-600 hover:text-pink-600"
                                        }`}
                                    >
                                        {nav.name}
                                    </Link>
                                </motion.div>

                                {/* Animated underline */}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-pink-600"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Navigation */}
                <div className="flex justify-end lg:hidden">
                    <MobileNav
                        mobileOpen={mobileOpen}
                        setMobileOpen={setMobileOpen}
                    />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

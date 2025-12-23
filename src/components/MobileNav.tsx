"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {navLinks} from "@/util/nav";
import {Sheet, SheetClose, SheetContent, SheetTrigger,} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {LucideMenu} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {DialogTitle} from "@radix-ui/react-dialog";

interface MobileNavProps {
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
                                                 mobileOpen,
                                                 setMobileOpen,
                                             }) => {
    const pathname = usePathname();

    return (
        <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>

                {/* Hamburger Trigger */}
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-900 hover:bg-gray-100"
                        aria-label="Open menu"
                    >
                        <motion.div whileTap={{scale: 0.9}}>
                            <LucideMenu className="h-7 w-7"/>
                        </motion.div>
                    </Button>
                </SheetTrigger>

                {/* Mobile Drawer */}
                <SheetContent
                    side="right"
                    className="w-72 bg-white px-6 py-8 shadow-lg"
                    aria-label="Mobile navigation"
                >
                    <DialogTitle>
                        <VisuallyHidden>Mobile navigation</VisuallyHidden>
                    </DialogTitle>

                    <nav className="mt-8 space-y-6">
                        <AnimatePresence>
                            {navLinks.map((nav, index) => {
                                const isActive = pathname === nav.slug;

                                return (
                                    <motion.div
                                        key={nav.slug}
                                        initial={{x: 40, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        exit={{x: 40, opacity: 0}}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 22,
                                            delay: index * 0.05,
                                        }}
                                    >
                                        <SheetClose asChild>
                                            <Link
                                                href={nav.slug}
                                                className={`block text-base font-medium transition-colors ${
                                                    isActive
                                                        ? "text-gray-900 underline underline-offset-4"
                                                        : "text-gray-600 hover:text-gray-900"
                                                }`}
                                            >
                                                {nav.name}
                                            </Link>
                                        </SheetClose>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;

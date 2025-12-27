import React from "react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getUTCFullYear();

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-[#a3a3a3]">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-sm text-center md:text-left">
                    © {CURRENT_YEAR}{" "}
                    <span className="text-[#e5e5e5] font-medium">Studio Kodak</span>
                </p>

                <div className="flex items-center gap-6 text-sm">
                    <Link href="https://maps.app.goo.gl/R8xz3Ru14sXRew9Q9" target="_blank"
                          className="hover:text-white transition-colors">
                        Google Reviews
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank"
                          className="hover:text-white transition-colors">
                        Instagram
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank"
                          className="hover:text-white transition-colors">
                        Facebook
                    </Link>
                </div>
            </div>

            <div className="border-t border-white/10 py-4 text-center">
                <p className="text-xs text-[#8a8a8a]">
                    Capturing moments that last forever
                </p>
            </div>
        </footer>
    );
}

import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Studio Kodak Wedding Photography",
    description: "Created by Rakesh Ghosh",
    authors: [{name: "Rakesh Ghosh"}],
    keywords: [
        "Wedding Photography",
        "Wedding Photographer",
        "Wedding Photoshoot",
        "Candid Wedding Photography",
        "Pre-Wedding Shoot",
        "Wedding Videography",
        "Bridal Photography",
        "Engagement Photography",
        "Destination Wedding Photography",
        "Event Photography",
        "Studio Kodak",
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}

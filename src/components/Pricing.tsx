"use client";

import {Card, CardContent} from "@/components/ui/card";
import {pricingData} from "@/util/pricing";
import Link from "next/link";
import {getNavLinkByName} from "@/lib/utilfunc";

const contentLink = getNavLinkByName("Contact Me");


const Pricing = () => {
    return (
        <section
            id="pricing"
            className="py-16"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
                    Wedding Packages
                </h2>

                {pricingData.map((service) => (
                    <div key={service.service} className="mb-24">
                        <h3 className="text-2xl font-medium text-center mb-12">
                            {service.service}
                        </h3>

                        <div className="grid gap-10 md:grid-cols-2">
                            {service.cards.map((card) => (
                                <Card
                                    key={card.title}
                                    className={`relative rounded-2xl border transition-shadow hover:shadow-xl ${
                                        card.highlighted
                                            ? "border-[#b89b5e]"
                                            : "border-border"
                                    }`}
                                >
                                    {/* Badge */}
                                    {card.badge && (
                                        <span
                                            className="absolute -top-4 left-6 bg-[#b89b5e] text-white text-xs px-4 py-1 rounded-full">
                      {card.badge}
                    </span>
                                    )}

                                    <CardContent className="p-8">
                                        <h4 className="text-xl font-semibold mb-4">
                                            {card.title}
                                        </h4>

                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                            {card.description}
                                        </p>

                                        <p className="text-sm font-medium mb-6">
                                            {card.equipment}
                                        </p>

                                        {/* Pricing */}
                                        <div className="flex items-end gap-4 mb-6">
                      <span className="text-lg line-through text-muted-foreground">
                        {card.originalPrice}
                      </span>
                                            <span className="text-3xl font-bold text-[#b89b5e]">
                        {card.offerPrice}
                      </span>
                                        </div>

                                        {/* CTA */}
                                        <Link href={contentLink?.slug || "/contact"}>
                                            <button
                                                className="w-full rounded-xl cursor-pointer bg-black text-white py-3 text-sm font-medium hover:bg-black/90 transition">
                                                Book on WhatsApp
                                            </button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;

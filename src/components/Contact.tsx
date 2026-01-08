"use client";

import React, {useState} from "react";
import {Profile} from "@/util/profile";
import {Button} from "@/components/ui/button";
import {formatMobileNumber} from "@/lib/utilfunc";
import {getPreparedMessage} from "@/lib/waMessage";

const WHATSAPP_NUMBER = Profile.whatsappNo; // e.g. "919876543210"
const formattedMobileNo = formatMobileNumber(Profile.mobileNo)
const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!WHATSAPP_NUMBER) return;

        setIsSending(true);

        const whatsappMessage = getPreparedMessage(form);
        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

        // Reset form AFTER redirect intent
        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        // Small delay improves perceived UX
        setTimeout(() => {
            window.open(whatsappURL, "_blank", "noopener,noreferrer");
            setIsSending(false);
        }, 300);
    };

    const isDisabled =
        !form.name.trim() ||
        !form.phone.trim() ||
        !form.message.trim() ||
        isSending;

    return (
        <section id="contact" className="py-28">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

                {/* Left Content */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Let’s Work Together
                    </h3>

                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        Share your event details and we’ll respond directly on WhatsApp.
                        Fast, simple, and personal.
                    </p>

                    <div className="mt-8 space-y-3 text-sm text-neutral-700">
                        <ul className="space-y-2">
                            <li>📞 +91 {Profile.mobileNo} | +91 {Profile.mobileNo2}</li>
                            <li>✉️ {Profile.email}</li>
                            <li>📍 {Profile.address1}</li>
                        </ul>
                    </div>

                    <div className="mt-8 rounded-xl overflow-hidden border border-white/10 ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472077.149491175!2d86.76020836562498!3d22.42515890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5bcbe54bcc51%3A0x1830ccb2b8181f01!2sSTUDIO%20KODAK!5e0!3m2!1sen!2sin!4v1766510748468!5m2!1sen!2sin"
                            className="w-full h-84 border-0 rounded-3xl contrast-90"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl border shadow-sm p-6 md:p-8 space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address (optional)"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Tell us about your shoot (wedding date, location, etc.)"
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black  resize-none`}
                        required
                    />
                    <Button
                        type="submit"
                        disabled={isDisabled}
                        className="
                            w-full flex items-center justify-center gap-2
                            bg-black text-white px-6 py-3 rounded-lg
                            hover:bg-neutral-800 transition
                            disabled:opacity-50 disabled:cursor-not-allowed
                        "
                    >
                        {isSending ? "Opening WhatsApp..." : "Send Enquiry on WhatsApp"}
                    </Button>

                    <p className="text-xs text-neutral-500 text-center">
                        You’ll be redirected to WhatsApp to complete your enquiry.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Contact;

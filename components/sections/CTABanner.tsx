"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import Button from "../ui/Button";

export default function CTABanner() {
    const t = useTranslations("cta");
    const locale = useLocale();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const waMessage = locale === "id"
        ? "Halo! Saya boleh minta informasi lebih lanjut terkait Paralayang Bandung? Terimakasih!"
        : "Hello! Can you please tell me more about Paralayang Bandung? Thank you!";
    const waLink = `https://wa.me/6281222302050?text=${encodeURIComponent(waMessage)}`;

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            ref={ref}
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-dusk via-dusk/90 to-sage/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sky)_0%,_transparent_50%)] opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading italic text-3xl md:text-5xl text-white mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                        {t("subtitle")}
                    </p>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="lg"
                            className="!bg-white !text-dusk hover:!bg-cloud hover:!shadow-xl"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {t("button")}
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

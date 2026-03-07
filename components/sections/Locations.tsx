"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Card from "../ui/Card";
import { MapPin } from "lucide-react";

export default function Locations() {
    const t = useTranslations("locations");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const locations = [
        {
            key: "gantolle",
            image: "/cililin.png",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.5!2d107.4!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDEwN8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1",
            mapLink: "https://maps.app.goo.gl/WsWBYgi5KYMJBLKN6",
        },
        {
            key: "ciater",
            image: "/santiong.png",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.5!2d107.6!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJTIDEwN8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1",
            mapLink: "https://maps.app.goo.gl/hqvxM82T4C1V7cZNA",
        },
    ] as const;

    return (
        <section id="locations" className="section-padding bg-cloud" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-dusk mb-3">
                        {t("title")}
                    </h2>
                    <p className="text-earth text-lg">{t("subtitle")}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        >
                            <Card className="overflow-hidden h-full">
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={loc.image}
                                        alt={t(`${loc.key}.name`)}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dusk/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-heading text-xl font-semibold">
                                            {t(`${loc.key}.name`)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-text/70 leading-relaxed mb-4">
                                        {t(`${loc.key}.description`)}
                                    </p>

                                    {/* Map link */}
                                    <a
                                        href={loc.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block rounded-xl overflow-hidden bg-sky/20 aspect-[16/9] relative group"
                                    >
                                        <iframe
                                            src={loc.mapEmbed}
                                            title={t(`${loc.key}.name`)}
                                            className="w-full h-full border-0 pointer-events-none"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            allowFullScreen
                                        />
                                        <div className="absolute inset-0 bg-dusk/0 group-hover:bg-dusk/10 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-dusk px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                Open in Maps
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

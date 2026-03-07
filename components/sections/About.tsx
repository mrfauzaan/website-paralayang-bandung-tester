"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
    const t = useTranslations("about");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-padding bg-cloud" ref={ref}>
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="https://placehold.co/800x600/C8E6F5/3D2F4E?text=Paralayang+Bandung"
                                alt="Paralayang Bandung"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dusk/20 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-5"
                    >
                        <p className="text-text/80 leading-relaxed text-lg">
                            {t("story")}
                        </p>
                        <p className="text-text/80 leading-relaxed">
                            {t("story2")}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

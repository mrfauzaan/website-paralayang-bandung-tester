"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Card from "../ui/Card";

export default function Team() {
    const t = useTranslations("team");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-padding bg-gradient-to-b from-cloud to-blush/20" ref={ref}>
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

                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card glass className="p-8 text-center">
                            <div className="w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-blush/30">
                                <Image
                                    src="/pilot.png"
                                    alt={t("member.name")}
                                    width={144}
                                    height={144}
                                    className="object-cover w-full h-full"
                                    unoptimized //
                                />
                            </div>
                            <h3 className="font-heading text-xl text-dusk mb-1">
                                {t("member.name")}
                            </h3>
                            <p className="text-sage font-medium text-sm mb-3">
                                {t("member.role")}
                            </p>
                            <p className="text-text/60 text-sm leading-relaxed">
                                {t("member.bio")}
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Card from "../ui/Card";

export default function Testimonials() {
    const t = useTranslations("testimonials");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [0, 1, 2];

    return (
        <section className="section-padding bg-sky/20" ref={ref}>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <Card glass className="p-6 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush to-sky flex items-center justify-center text-white font-heading text-lg font-bold">
                                        {t(`items.${index}.name`).charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-dusk">
                                            {t(`items.${index}.name`)}
                                        </p>
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: t.raw(`items.${index}.rating`) as number }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-3.5 h-3.5 fill-earth text-earth"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-text/70 text-sm leading-relaxed italic flex-grow">
                                    &ldquo;{t(`items.${index}.text`)}&rdquo;
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

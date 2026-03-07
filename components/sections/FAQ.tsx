"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Accordion from "../ui/Accordion";

export default function FAQ() {
    const t = useTranslations("faq");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const items = Array.from({ length: 6 }, (_, i) => ({
        question: t(`items.${i}.question`),
        answer: t(`items.${i}.answer`),
    }));

    return (
        <section className="section-padding bg-cloud" ref={ref}>
            <div className="max-w-3xl mx-auto">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion items={items} />
                </motion.div>
            </div>
        </section>
    );
}

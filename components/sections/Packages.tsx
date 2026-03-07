"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Clock, MapPin, Users, AlertTriangle } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Packages() {
    const t = useTranslations("packages");
    const locale = useLocale();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="packages" className="section-padding bg-gradient-to-b from-cloud to-sky/20" ref={ref}>
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
                    {/* Tandem Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card glass className="p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-heading text-2xl text-dusk">
                                    {t("tandem.name")}
                                </h3>
                                <Badge variant="price">{t("tandem.price")}</Badge>
                            </div>
                            <p className="text-xs text-earth mb-4">{t("tandem.priceNote")}</p>

                            <p className="text-text/70 leading-relaxed mb-6">
                                {t("tandem.description")}
                            </p>

                            <div className="space-y-3 mb-6 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <Clock className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("tandem.duration")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("tandem.location")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <Users className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("tandem.requirements")}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-earth/80">
                                    <AlertTriangle className="w-4 h-4 text-earth flex-shrink-0 mt-0.5" />
                                    <span>{t("tandem.note")}</span>
                                </div>
                            </div>

                            <Link href={`/${locale}/booking`}>
                                <Button className="w-full">{t("tandem.bookNow")}</Button>
                            </Link>
                        </Card>
                    </motion.div>

                    {/* Course Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Card glass className="p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-heading text-2xl text-dusk">
                                    {t("course.name")}
                                </h3>
                                <Badge variant="info">{t("course.price")}</Badge>
                            </div>
                            <p className="text-xs text-earth mb-4">{t("course.priceNote")}</p>

                            <p className="text-text/70 leading-relaxed mb-6">
                                {t("course.description")}
                            </p>

                            <div className="space-y-3 mb-6 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <Clock className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("course.duration")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("course.location")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/70">
                                    <Users className="w-4 h-4 text-sage flex-shrink-0" />
                                    <span>{t("course.includes")}</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/6281222302050?text=Halo%2C+saya+tertarik+dengan+kursus+paragliding"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" className="w-full">
                                    {t("course.contactUs")}
                                </Button>
                            </a>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

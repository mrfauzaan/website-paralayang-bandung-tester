"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
    const t = useTranslations("hero");
    const locale = useLocale();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Sky gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky via-sky/60 to-cloud" />

            {/* Animated clouds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="cloud cloud-1" />
                <div className="cloud cloud-2" />
                <div className="cloud cloud-3" />
                <div className="cloud cloud-4" />
            </div>

            {/* Subtle mountain silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="var(--color-cloud)"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full opacity-50"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="var(--color-sage)"
                        fillOpacity="0.15"
                        d="M0,288L60,266.7C120,245,240,203,360,192C480,181,600,203,720,208C840,213,960,203,1080,192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dusk leading-tight mb-6">
                        {t("tagline")}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t("subtitle")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href={`/${locale}/booking`}>
                        <Button size="lg">{t("bookNow")}</Button>
                    </Link>
                    <Link href={`/${locale}/#packages`}>
                        <Button variant="outline" size="lg">
                            {t("learnMore")}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

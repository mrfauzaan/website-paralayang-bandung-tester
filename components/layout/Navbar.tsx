"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import Button from "../ui/Button";

export default function Navbar() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/#packages`, label: t("packages") },
        { href: `/${locale}/#locations`, label: t("locations") },
        { href: `/${locale}/about`, label: t("about") },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href={`/${locale}`}
                        className="flex items-center gap-2 group"
                    >
                        <span className="font-heading text-lg md:text-xl font-bold text-dusk">
                            Paralayang Bandung
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text/70 hover:text-dusk transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <LanguageToggle />
                        <Link href={`/${locale}/booking`}>
                            <Button size="sm">{t("bookNow")}</Button>
                        </Link>
                    </div>

                    {/* Mobile: Language + Hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        <LanguageToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-dusk cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blush/20"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-text/70 hover:text-dusk hover:bg-sky/20 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    href={`/${locale}/booking`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button className="w-full">{t("bookNow")}</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

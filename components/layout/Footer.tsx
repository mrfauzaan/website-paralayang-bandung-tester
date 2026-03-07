import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
    const t = useTranslations("footer");
    const nav = useTranslations("nav");
    const locale = useLocale();

    return (
        <footer className="bg-dusk text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-heading text-xl font-bold">
                                Paralayang Bandung
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {t("description")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg mb-4">{t("quickLinks")}</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href={`/${locale}`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("home")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/#packages`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("packages")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/booking`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("booking")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/about`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("about")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-heading text-lg mb-4">Legal</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href={`/${locale}/terms`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("terms")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/privacy`}
                                    className="text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    {nav("privacy")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="font-heading text-lg mb-4">{t("contact")}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/6282126154170"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    +6282126154170
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/paralayang_bandung"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/60 hover:text-sky text-sm transition-colors"
                                >
                                    <Instagram className="w-4 h-4" />
                                    @paralayang_bandung
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <p className="text-center text-white/40 text-sm">
                        {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}

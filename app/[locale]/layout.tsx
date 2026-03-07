import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Paralayang Bandung — Terbang di Atas Langit Jawa Barat",
    description:
        "Nikmati pengalaman terbang tandem paragliding di Gantolle Cililin dan Bukit Santiong Ciater bersama pilot berpengalaman. Mulai dari Rp 450.000.",
    keywords: [
        "paragliding bandung",
        "paralayang bandung",
        "tandem paragliding",
        "gantolle cililin",
        "bukit santiong ciater",
    ],
    openGraph: {
        title: "Paralayang Bandung",
        description: "Fly Above Bandung — Tandem Paragliding & Courses",
        url: "https://paralyangbandung.com",
        siteName: "Paralayang Bandung",
        locale: "id_ID",
        type: "website",
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as "id" | "en")) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className="font-body text-text bg-cloud antialiased">
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

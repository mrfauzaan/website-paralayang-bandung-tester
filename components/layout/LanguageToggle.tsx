"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        const newPath = segments.join("/");
        localStorage.setItem("preferred-locale", newLocale);
        router.push(newPath);
    };

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full p-1">
            <button
                onClick={() => switchLocale("id")}
                className={`px-2.5 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer ${locale === "id"
                    ? "bg-dusk text-white shadow-sm"
                    : "text-text/60 hover:text-text"
                    }`}
                aria-label="Bahasa Indonesia"
            >
                ID
            </button>
            <button
                onClick={() => switchLocale("en")}
                className={`px-2.5 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer ${locale === "en"
                    ? "bg-dusk text-white shadow-sm"
                    : "text-text/60 hover:text-text"
                    }`}
                aria-label="English"
            >
                EN
            </button>
        </div>
    );
}

import { useTranslations } from "next-intl";

export default function PrivacyPage() {
    const t = useTranslations("privacy");

    const sectionKeys = [
        "intro",
        "dataCollected",
        "dataUsage",
        "dataSharing",
        "whatsapp",
        "retention",
        "rights",
        "contact",
    ] as const;

    return (
        <div className="min-h-screen pt-28 pb-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-heading text-3xl md:text-4xl text-dusk mb-2">
                    {t("title")}
                </h1>
                <p className="text-text/50 text-sm mb-10">{t("lastUpdated")}</p>

                <div className="space-y-8">
                    {sectionKeys.map((key) => (
                        <section key={key}>
                            <h2 className="font-heading text-xl text-dusk mb-3">
                                {t(`sections.${key}.title`)}
                            </h2>
                            <p className="text-text/70 leading-relaxed">
                                {t(`sections.${key}.content`)}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

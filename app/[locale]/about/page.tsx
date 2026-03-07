import { useTranslations } from "next-intl";
import Image from "next/image";
import Team from "@/components/sections/Team";
import { Shield, Heart, Mountain } from "lucide-react";

export default function AboutPage() {
    const t = useTranslations("about");
    const tp = useTranslations("aboutPage");

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-sky/40 to-cloud">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-heading italic text-4xl md:text-5xl text-dusk mb-4">
                        {tp("heroTitle")}
                    </h1>
                    <p className="text-earth text-lg max-w-2xl mx-auto">
                        {tp("heroSubtitle")}
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-cloud">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                        <Image
                            src="https://placehold.co/800x600/C8E6F5/3D2F4E?text=Our+Story"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-5">
                        <h2 className="font-heading text-3xl text-dusk">{t("title")}</h2>
                        <p className="text-text/80 leading-relaxed text-lg">{t("story")}</p>
                        <p className="text-text/80 leading-relaxed">{t("story2")}</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gradient-to-b from-cloud to-sky/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-8">
                        <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-sage" />
                        </div>
                        <h3 className="font-heading text-xl text-dusk mb-3">{t("mission")}</h3>
                        <p className="text-text/70 leading-relaxed">{t("missionText")}</p>
                    </div>
                    <div className="glass-card p-8">
                        <div className="w-12 h-12 rounded-full bg-sky/30 flex items-center justify-center mb-4">
                            <Mountain className="w-6 h-6 text-dusk" />
                        </div>
                        <h3 className="font-heading text-xl text-dusk mb-3">{t("vision")}</h3>
                        <p className="text-text/70 leading-relaxed">{t("visionText")}</p>
                    </div>
                </div>
            </section>

            {/* Safety */}
            <section className="section-padding bg-cloud">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-8 h-8 text-dusk" />
                    </div>
                    <h2 className="font-heading text-3xl text-dusk mb-4">{t("safety")}</h2>
                    <p className="text-text/70 leading-relaxed text-lg max-w-2xl mx-auto">
                        {t("safetyText")}
                    </p>
                </div>
            </section>

            {/* Team */}
            <Team />

            {/* Location Overview */}
            <section className="section-padding bg-cloud">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-heading text-3xl text-dusk mb-4">{tp("locationOverview")}</h2>
                    <p className="text-text/70 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
                        {tp("locationText")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-video">
                            <Image
                                src="https://placehold.co/800x450/7A9E87/F5F0EB?text=Gantolle+Cililin"
                                alt="Gantolle Cililin"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-video">
                            <Image
                                src="https://placehold.co/800x450/7A9E87/F5F0EB?text=Bukit+Santiong+Ciater"
                                alt="Bukit Santiong Ciater"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

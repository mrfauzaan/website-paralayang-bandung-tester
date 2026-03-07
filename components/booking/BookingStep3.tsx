"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Step1Data, Step2Data } from "@/lib/validations";
import { formatWhatsAppLink } from "@/lib/utils";
import { MessageCircle, ExternalLink } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";

interface BookingStep3Props {
    step1Data: Step1Data;
    step2Data: Step2Data;
    onBack: () => void;
}

export default function BookingStep3({
    step1Data,
    step2Data,
    onBack,
}: BookingStep3Props) {
    const t = useTranslations("booking.step3");
    const t1 = useTranslations("booking.step1");
    const locale = useLocale();
    const [insurance, setInsurance] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsError, setTermsError] = useState(false);

    const locationLabel =
        step1Data.location === "gantolle" ? t1("gantolle") : t1("ciater");
    const packageLabel =
        step1Data.packageType === "tandem" ? t1("tandem") : t1("course");

    const handleSubmit = () => {
        if (!termsAccepted) {
            setTermsError(true);
            return;
        }

        const link = formatWhatsAppLink({
            packageName: packageLabel,
            location: locationLabel,
            date: step1Data.date,
            pax: step1Data.pax,
            name: step2Data.fullName,
            phone: step2Data.phone,
        });

        window.open(link, "_blank");
    };

    return (
        <div className="space-y-6">
            <h3 className="font-heading text-2xl text-dusk">{t("title")}</h3>

            {/* Summary */}
            <div className="glass-card p-6 space-y-3">
                <h4 className="font-heading text-lg text-dusk mb-4">{t("summary")}</h4>

                <div className="grid grid-cols-2 gap-y-3 text-sm">
                    <span className="text-text/50">{t("package")}</span>
                    <span className="font-medium text-text">{packageLabel}</span>

                    <span className="text-text/50">{t("location")}</span>
                    <span className="font-medium text-text">{locationLabel}</span>

                    <span className="text-text/50">{t("date")}</span>
                    <span className="font-medium text-text">{step1Data.date}</span>

                    {step1Data.packageType === "tandem" && (
                        <>
                            <span className="text-text/50">{t("pax")}</span>
                            <span className="font-medium text-text">{step1Data.pax}</span>
                        </>
                    )}

                    <span className="text-text/50">{t("name")}</span>
                    <span className="font-medium text-text">{step2Data.fullName}</span>

                    <span className="text-text/50">{t("email")}</span>
                    <span className="font-medium text-text">{step2Data.email}</span>

                    <span className="text-text/50">{t("phone")}</span>
                    <span className="font-medium text-text">{step2Data.phone}</span>

                    <span className="text-text/50">{t("age")}</span>
                    <span className="font-medium text-text">{step2Data.age}</span>

                    <span className="text-text/50">{t("weight")}</span>
                    <span className="font-medium text-text">{step2Data.weight} kg</span>

                    <span className="text-text/50">{t("emergencyContact")}</span>
                    <span className="font-medium text-text">
                        {step2Data.emergencyName} ({step2Data.emergencyPhone})
                    </span>
                </div>
            </div>

            {/* Insurance */}
            <label className="flex items-start gap-3 p-4 glass-card cursor-pointer">
                <input
                    type="checkbox"
                    checked={insurance}
                    onChange={(e) => setInsurance(e.target.checked)}
                    className="accent-dusk w-4 h-4 mt-1"
                />
                <span className="text-sm text-text/70">{t("insurance")}</span>
            </label>

            {/* Terms */}
            <div>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => {
                            setTermsAccepted(e.target.checked);
                            setTermsError(false);
                        }}
                        className="accent-dusk w-4 h-4 mt-1"
                    />
                    <span className="text-sm text-text/70">
                        {t("terms")}{" "}
                        <Link
                            href={`/${locale}/terms`}
                            className="text-dusk underline hover:text-sage inline-flex items-center gap-1"
                            target="_blank"
                        >
                            {t("termsLink")}
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                    </span>
                </label>
                {termsError && (
                    <p className="text-red-400 text-xs mt-1">
                        {useTranslations("booking.validation")("termsRequired")}
                    </p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <Button onClick={onBack} variant="outline" className="flex-1" size="lg">
                    {t("back")}
                </Button>
                <Button onClick={handleSubmit} className="flex-1" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t("submit")}
                </Button>
            </div>
        </div>
    );
}

"use client";

import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { Step2Data } from "@/lib/validations";
import Button from "../ui/Button";

interface BookingStep2Props {
    form: UseFormReturn<Step2Data>;
    onNext: () => void;
    onBack: () => void;
}

export default function BookingStep2({ form, onNext, onBack }: BookingStep2Props) {
    const t = useTranslations("booking.step2");
    const tv = useTranslations("booking.validation");
    const {
        register,
        formState: { errors },
    } = form;

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-blush/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-dusk/30 focus:border-dusk/30 transition-all text-text";
    const labelClass = "block text-sm font-medium text-text/80 mb-1.5";
    const errorClass = "text-red-400 text-xs mt-1";

    return (
        <div className="space-y-5">
            <h3 className="font-heading text-2xl text-dusk">{t("title")}</h3>

            {/* Full Name */}
            <div>
                <label className={labelClass}>{t("fullName")}</label>
                <input
                    type="text"
                    {...register("fullName")}
                    className={inputClass}
                    placeholder={t("fullName")}
                />
                {errors.fullName && (
                    <p className={errorClass}>{tv(errors.fullName.message as string)}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className={labelClass}>{t("email")}</label>
                <input
                    type="email"
                    {...register("email")}
                    className={inputClass}
                    placeholder={t("email")}
                />
                {errors.email && (
                    <p className={errorClass}>{tv(errors.email.message as string)}</p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label className={labelClass}>{t("phone")}</label>
                <input
                    type="tel"
                    {...register("phone")}
                    className={inputClass}
                    placeholder="+62..."
                />
                {errors.phone && (
                    <p className={errorClass}>{tv(errors.phone.message as string)}</p>
                )}
            </div>

            {/* Age & Weight */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>{t("age")}</label>
                    <input
                        type="number"
                        {...register("age", { valueAsNumber: true })}
                        className={inputClass}
                        placeholder={t("age")}
                        min={10}
                    />
                    {errors.age && (
                        <p className={errorClass}>{tv(errors.age.message as string)}</p>
                    )}
                </div>
                <div>
                    <label className={labelClass}>{t("weight")}</label>
                    <input
                        type="number"
                        {...register("weight", { valueAsNumber: true })}
                        className={inputClass}
                        placeholder="kg"
                        max={90}
                    />
                    {errors.weight && (
                        <p className={errorClass}>{tv(errors.weight.message as string)}</p>
                    )}
                </div>
            </div>

            {/* Emergency Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>{t("emergencyName")}</label>
                    <input
                        type="text"
                        {...register("emergencyName")}
                        className={inputClass}
                        placeholder={t("emergencyName")}
                    />
                    {errors.emergencyName && (
                        <p className={errorClass}>{tv(errors.emergencyName.message as string)}</p>
                    )}
                </div>
                <div>
                    <label className={labelClass}>{t("emergencyPhone")}</label>
                    <input
                        type="tel"
                        {...register("emergencyPhone")}
                        className={inputClass}
                        placeholder="+62..."
                    />
                    {errors.emergencyPhone && (
                        <p className={errorClass}>{tv(errors.emergencyPhone.message as string)}</p>
                    )}
                </div>
            </div>

            {/* Medical Conditions */}
            <div>
                <label className={labelClass}>{t("medicalConditions")}</label>
                <textarea
                    {...register("medicalConditions")}
                    className={`${inputClass} min-h-[100px] resize-none`}
                    placeholder={t("medicalPlaceholder")}
                />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <Button onClick={onBack} variant="outline" className="flex-1" size="lg">
                    {t("back")}
                </Button>
                <Button onClick={onNext} className="flex-1" size="lg">
                    {t("next")}
                </Button>
            </div>
        </div>
    );
}

"use client";

import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { Step1Data } from "@/lib/validations";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Button from "../ui/Button";

interface BookingStep1Props {
    form: UseFormReturn<Step1Data>;
    onNext: () => void;
}

export default function BookingStep1({ form, onNext }: BookingStep1Props) {
    const t = useTranslations("booking.step1");
    const tv = useTranslations("booking.validation");
    const {
        register,
        setValue,
        watch,
        formState: { errors },
    } = form;

    const [showCalendar, setShowCalendar] = useState(false);
    const selectedDate = watch("date");
    const packageType = watch("packageType");

    const handleDateSelect = (day: Date | undefined) => {
        if (day) {
            setValue("date", day.toISOString().split("T")[0], { shouldValidate: true });
            setShowCalendar(false);
        }
    };

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-blush/30 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-dusk/30 focus:border-dusk/30 transition-all text-text";
    const labelClass = "block text-sm font-medium text-text/80 mb-1.5";
    const errorClass = "text-red-400 text-xs mt-1";

    return (
        <div className="space-y-6">
            <h3 className="font-heading text-2xl text-dusk">{t("title")}</h3>

            {/* Package */}
            <div>
                <label className={labelClass}>{t("package")}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(["tandem", "course"] as const).map((pkg) => (
                        <label
                            key={pkg}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${packageType === pkg
                                    ? "border-dusk bg-dusk/5"
                                    : "border-blush/20 hover:border-blush/40"
                                }`}
                        >
                            <input
                                type="radio"
                                value={pkg}
                                {...register("packageType")}
                                className="accent-dusk w-4 h-4"
                            />
                            <span className="font-medium text-text">{t(pkg)}</span>
                        </label>
                    ))}
                </div>
                {errors.packageType && (
                    <p className={errorClass}>{tv(errors.packageType.message as string)}</p>
                )}
            </div>

            {/* Location */}
            <div>
                <label className={labelClass}>{t("location")}</label>
                <select {...register("location")} className={inputClass}>
                    <option value="">{t("location")}</option>
                    <option value="gantolle">{t("gantolle")}</option>
                    {packageType !== "course" && (
                        <option value="ciater">{t("ciater")}</option>
                    )}
                </select>
                {errors.location && (
                    <p className={errorClass}>{tv(errors.location.message as string)}</p>
                )}
            </div>

            {/* Date */}
            <div>
                <label className={labelClass}>{t("date")}</label>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                        className={`${inputClass} text-left flex items-center justify-between cursor-pointer`}
                    >
                        <span className={selectedDate ? "text-text" : "text-text/40"}>
                            {selectedDate || t("date")}
                        </span>
                        <Calendar className="w-5 h-5 text-text/40" />
                    </button>
                    {showCalendar && (
                        <div className="absolute z-20 mt-2 bg-white rounded-2xl shadow-xl border border-blush/20 p-3">
                            <DayPicker
                                mode="single"
                                selected={selectedDate ? new Date(selectedDate) : undefined}
                                onSelect={handleDateSelect}
                                disabled={{ before: new Date() }}
                                className="!font-body"
                            />
                        </div>
                    )}
                </div>
                {errors.date && (
                    <p className={errorClass}>{tv(errors.date.message as string)}</p>
                )}
            </div>

            {/* Pax */}
            {packageType !== "course" && (
                <div>
                    <label className={labelClass}>{t("pax")}</label>
                    <select
                        {...register("pax", { valueAsNumber: true })}
                        className={inputClass}
                    >
                        <option value="">{t("pax")}</option>
                        {[1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                    <p className="text-xs text-text/40 mt-1">{t("paxNote")}</p>
                    {errors.pax && (
                        <p className={errorClass}>{tv(errors.pax.message as string)}</p>
                    )}
                </div>
            )}

            <Button onClick={onNext} className="w-full" size="lg">
                {t("next")}
            </Button>
        </div>
    );
}

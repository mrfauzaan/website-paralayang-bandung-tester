"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { step1Schema, step2Schema, Step1Data, Step2Data } from "@/lib/validations";
import ProgressBar from "@/components/ui/ProgressBar";
import BookingStep1 from "@/components/booking/BookingStep1";
import BookingStep2 from "@/components/booking/BookingStep2";
import BookingStep3 from "@/components/booking/BookingStep3";

export default function BookingPage() {
    const t = useTranslations("booking");
    const [step, setStep] = useState(1);
    const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
    const [step2Data, setStep2Data] = useState<Step2Data | null>(null);

    const form1 = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            packageType: undefined,
            location: undefined,
            date: "",
            pax: 1,
        },
    });

    const form2 = useForm<Step2Data>({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            age: undefined,
            weight: undefined,
            emergencyName: "",
            emergencyPhone: "",
            medicalConditions: "",
        },
    });

    const handleStep1Next = async () => {
        const valid = await form1.trigger();
        if (valid) {
            setStep1Data(form1.getValues());
            setStep(2);
        }
    };

    const handleStep2Next = async () => {
        const valid = await form2.trigger();
        if (valid) {
            setStep2Data(form2.getValues());
            setStep(3);
        }
    };

    const stepLabels = [
        t("progress.step1"),
        t("progress.step2"),
        t("progress.step3"),
    ];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="font-heading text-3xl md:text-4xl text-dusk mb-3">
                        {t("title")}
                    </h1>
                    <p className="text-earth">{t("subtitle")}</p>
                </div>

                <ProgressBar
                    currentStep={step}
                    totalSteps={3}
                    labels={stepLabels}
                />

                <div className="glass-card p-6 md:p-8 mt-8">
                    <AnimatePresence mode="wait" custom={step}>
                        <motion.div
                            key={step}
                            custom={step}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {step === 1 && (
                                <BookingStep1
                                    form={form1}
                                    onNext={handleStep1Next}
                                />
                            )}

                            {step === 2 && (
                                <BookingStep2
                                    form={form2}
                                    onNext={handleStep2Next}
                                    onBack={() => setStep(1)}
                                />
                            )}

                            {step === 3 && step1Data && step2Data && (
                                <BookingStep3
                                    step1Data={step1Data}
                                    step2Data={step2Data}
                                    onBack={() => setStep(2)}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

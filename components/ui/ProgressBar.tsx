"use client";

import React from "react";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    labels: string[];
}

export default function ProgressBar({
    currentStep,
    totalSteps,
    labels,
}: ProgressBarProps) {
    return (
        <div className="w-full mb-8">
            <div className="flex items-center justify-between relative">
                {/* Background line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-blush/30" />
                {/* Active line */}
                <div
                    className="absolute top-5 left-0 h-0.5 bg-dusk transition-all duration-500"
                    style={{
                        width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                />

                {Array.from({ length: totalSteps }, (_, i) => {
                    const step = i + 1;
                    const isActive = step <= currentStep;
                    const isCurrent = step === currentStep;

                    return (
                        <div
                            key={step}
                            className="flex flex-col items-center relative z-10"
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${isCurrent
                                        ? "bg-dusk text-white shadow-lg shadow-dusk/30 scale-110"
                                        : isActive
                                            ? "bg-dusk text-white"
                                            : "bg-white border-2 border-blush/40 text-text/40"
                                    }`}
                            >
                                {step}
                            </div>
                            <span
                                className={`mt-2 text-xs font-medium ${isActive ? "text-dusk" : "text-text/40"
                                    }`}
                            >
                                {labels[i]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

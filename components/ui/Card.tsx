"use client";

import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glass?: boolean;
    hover?: boolean;
}

export default function Card({
    children,
    className = "",
    glass = false,
    hover = true,
}: CardProps) {
    const base = "rounded-2xl overflow-hidden";
    const glassStyle = glass
        ? "glass-card"
        : "bg-white border border-blush/20 shadow-sm";
    const hoverStyle = hover
        ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dusk/10"
        : "";

    return (
        <div className={`${base} ${glassStyle} ${hoverStyle} ${className}`}>
            {children}
        </div>
    );
}

import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "price" | "info";
    className?: string;
}

export default function Badge({
    children,
    variant = "default",
    className = "",
}: BadgeProps) {
    const variants = {
        default: "bg-dusk/10 text-dusk",
        price: "bg-sage/20 text-sage font-semibold",
        info: "bg-sky/40 text-dusk",
    };

    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-sm ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    );
}

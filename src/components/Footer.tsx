"use client";

import React from "react";

export default function Footer() {
    return (
        <footer
            className="w-full px-6 py-4 border-t text-center text-sm bg-black text-white"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            © {new Date().getFullYear()} Polygon Ape Punks Club
        </footer>

    );
}

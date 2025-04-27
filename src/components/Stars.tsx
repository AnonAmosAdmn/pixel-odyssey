"use client";

import { useRef, useEffect } from "react";
import { Box } from "@radix-ui/themes";
import React from "react";

const Stars: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const stars: { x: number; y: number; radius: number; speed: number }[] = [];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateStars();
    };

    const generateStars = () => {
        stars.length = 0;
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 2;
            const speed = Math.random() * 0.5 + 0.2;
            stars.push({ x, y, radius, speed });
        }
    };

    const updateStars = () => {
        for (const star of stars) {
        star.y -= star.speed;
        if (star.y < 0) {
            star.y = canvas.height;
        }
        }
    };

    const drawStars = () => {
        context.fillStyle = "#ffffff";
        for (const star of stars) {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
        }
    };

    const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        updateStars();
        drawStars();
        requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
        window.removeEventListener("resize", resizeCanvas);
    };
    }, []);

    return (
    <Box
        asChild
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        style={{ zIndex: -1 }}
    >
        <canvas ref={canvasRef}></canvas>
    </Box>
    );
};

export default Stars;

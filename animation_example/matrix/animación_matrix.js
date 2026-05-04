import { useEffect, useRef } from "react";
import "./styles.css";

const asciiStar = [
    "       ..       ",
    "     .    .     ",
    "   .        .   ",
    " .    ..      . ",
    ".   .    .     .",
    " .    ..      . ",
    "   .        .   ",
    "     .    .     ",
    "       ..       ",
];

export default function App() {
    const containerRef = useRef(null);

    useEffect(() => {
        const dots = containerRef.current.querySelectorAll(".dot");

        dots.forEach((dot) => {
            // posición inicial arriba (aleatoria)
            const startY = -Math.random() * 400 - 50;

            // delay random tipo “Matrix”
            const delay = Math.random() * 1.5;

            dot.animate(
                [
                    { transform: `translateY(${startY}px)`, opacity: 0 },
                    { transform: "translateY(0px)", opacity: 1 },
                ],
                {
                    duration: 1200 + Math.random() * 800,
                    delay: delay * 1000,
                    easing: "cubic-bezier(0.22, 1, 0.36, 1)", // suave con caída
                    fill: "forwards",
                }
            );
        });
    }, []);

    return (
        <div className="app">
            <div className="star" ref={containerRef}>
                {asciiStar.map((row, i) => (
                    <div key={i} className="row">
                        {row.split("").map((char, j) => (
                            <span
                                key={j}
                                className="dot"
                                style={{
                                    opacity: char === "." ? 1 : 0,
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
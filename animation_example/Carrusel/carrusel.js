import { motion, useMotionValue, animate } from "framer-motion";
import { useRef } from "react";

const items = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
];

const radius = 250;

export default function App() {
    const rotateY = useMotionValue(0);
    const controls = useRef(null);

    // 🔁 función para iniciar rotación automática
    const startAutoRotate = () => {
        controls.current = animate(rotateY, rotateY.get() + 360, {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
        });
    };

    // ⏹ detener rotación
    const stopAutoRotate = () => {
        if (controls.current) controls.current.stop();
    };

    // iniciar al montar
    useRef(() => {
        startAutoRotate();
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
            }}
        >
            <div style={{ perspective: "1200px" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}

                    // 👇 detener auto-rotación al interactuar
                    onDragStart={stopAutoRotate}

                    // 👇 reanudar cuando suelta
                    onDragEnd={startAutoRotate}

                    onDrag={(event, info) => {
                        rotateY.set(rotateY.get() + info.delta.x * 0.5);
                    }}

                    style={{
                        width: "150px",
                        height: "150px",
                        transformStyle: "preserve-3d",
                        position: "relative",
                        rotateY,
                        x: 0,
                        cursor: "grab",
                    }}

                    whileTap={{ cursor: "grabbing" }}
                >
                    {items.map((item, index) => {
                        const theta = (2 * Math.PI) / items.length;
                        const angle = theta * index;

                        return (
                            <div
                                key={item.id}
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    transform: `rotateY(${(angle * 180) / Math.PI}deg) translateZ(${radius}px)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#fff",
                                    borderRadius: "0px",
                                    backfaceVisibility: "visible",
                                }}
                            >
                                {item.text}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
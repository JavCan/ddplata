import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import pedirUnDeseo from '../assets/pedir_un_deseo5.webp';
import servilletero from '../assets/servilletero.webp';
import libelula from '../assets/libelula.webp';
import toko from '../assets/toko1.webp';
import racejournal from '../assets/racejournal1.webp';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    year: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        slug: 'pedir-un-deseo',
        title: 'Pedir Un Deseo',
        category: 'Producto',
        year: '2025',
        image: pedirUnDeseo,
    },
    {
        id: 2,
        slug: 'amanecer',
        title: 'Amanecer',
        category: 'Producto',
        year: '2024',
        image: servilletero,
    },
    {
        id: 3,
        slug: 'seres-mutantes',
        title: 'Seres Mutantes',
        category: 'Producto',
        year: '2023',
        image: libelula,
    },
    {
        id: 4,
        slug: 'toko',
        title: 'Toko',
        category: 'Producto',
        year: '2024',
        image: toko,
    },
    {
        id: 5,
        slug: 'race-journal',
        title: 'Race Journal',
        category: 'Producto',
        year: '2024',
        image: racejournal,
    }
];

export function Projects() {
    const rotateY = useMotionValue(0);
    const controls = useRef<any>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 480);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const startAutoRotate = () => {
        controls.current = animate(rotateY, rotateY.get() + 360, {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
        });
    };

    const stopAutoRotate = () => {
        if (controls.current) controls.current.stop();
    };

    useEffect(() => {
        startAutoRotate();
        return () => stopAutoRotate();
    }, []);

    const cardWidth = isMobile ? 200 : 450;
    const cardHeight = isMobile ? 120 : 280;
    const radius = isMobile ? 150 : 370;
    const containerHeight = isMobile ? 220 : 500;

    return (
        <section id="proyectos" className="pt-4 pb-12 xs:py-12 bg-transparent overflow-hidden min-h-[60vh] flex flex-col items-center justify-center relative z-10">
            <div
                style={{ perspective: "1200px", height: `${containerHeight}px` }}
                className="flex justify-center items-center mt-4 xs:mt-8 w-full"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDragStart={stopAutoRotate}
                    onDragEnd={startAutoRotate}
                    onDrag={(_event, info) => {
                        rotateY.set(rotateY.get() + info.delta.x * 0.5);
                    }}
                    style={{
                        width: `${cardWidth}px`,
                        height: `${cardHeight}px`,
                        transformStyle: "preserve-3d",
                        position: "relative",
                        rotateY,
                        x: 0,
                        cursor: "grab",
                    }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {projects.map((project, index) => {
                        const theta = (2 * Math.PI) / projects.length;
                        const angle = theta * index;

                        return (
                            <Link
                                to={`/${project.slug}`}
                                key={project.id}
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    transform: `rotateY(${(angle * 180) / Math.PI}deg) translateZ(${radius}px)`,
                                    backfaceVisibility: "visible",
                                }}
                                className="group block bg-white shadow-md overflow-hidden"
                            >
                                <div className="relative w-full h-full bg-neutral-200">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </motion.div>
            </div>

            {/* Pink Link */}
            <div className="flex justify-center mb-12 mt-[50px] px-4">
                <Link
                    to="/pedir-un-deseo"
                    className="text-[#ff5c9d] text-2xl font-normal underline underline-offset-4 decoration-1 hover:text-[#a5d6a7] transition-colors text-center max-[480px]:text-lg"
                >
                    Checa mi proyecto que llego al Design Week en Milán!!!
                </Link>
            </div>
        </section>
    );
}
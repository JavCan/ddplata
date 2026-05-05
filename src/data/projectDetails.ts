import pedirUnDeseo1 from '../assets/pedir_un_deseo1.webp';
import pedirUnDeseo2 from '../assets/pedir_un_deseo2.webp';
import pedirUnDeseo3 from '../assets/pedir_un_deseo3.webp';
import pedirUnDeseo4 from '../assets/pedir_un_deseo4.webp';
import pedirUnDeseo5 from '../assets/pedir_un_deseo5.webp';
import pedirUnDeseo6 from '../assets/pedir_un_deseo6.webp';

// Corregido: Ruta a '../assets/' y extensión a .JPEG (Mayúsculas)
import servilletero1 from '../assets/servilletero1.webp';
import servilletero2 from '../assets/servilletero2.webp';
import servilletero3 from '../assets/servilletero3.webp';

import libelula1 from '../assets/libelula1.webp';
import libelula2 from '../assets/libelula2.webp';
import libelula3 from '../assets/libelula3.webp';

// Nuevos proyectos
import toko1 from '../assets/toko1.webp';
import toko2 from '../assets/toko2.webp';
import toko3 from '../assets/toko3.webp';

import racejournal1 from '../assets/racejournal1.webp';
import racejournal2 from '../assets/racejournal2.webp';
import racejournal3 from '../assets/racejournal3.webp';
import racejournal4 from '../assets/racejournal4.webp';

// Definición de tipos para los bloques
interface ProjectBlock {
    description: string;
    details: { image: string }[];
}

export interface ProjectDetail {
    id: number;
    slug: string;
    title: string;
    category: string;
    year: string;
    // La descripción general del proyecto ya no es necesaria aquí, se mueve a los bloques
    // description: string; 
    // Ahora usamos un array de bloques
    blocks: ProjectBlock[];
}

export const projectDetails: ProjectDetail[] = [
    {
        id: 1,
        slug: 'pedir-un-deseo',
        title: 'Pedir Un Deseo',
        category: 'Producto',
        year: '2025',
        // Estructura con bloques separados
        blocks: [
            {
                description: 'Como proyecto de quinto semestre mi compañera María José Gaona y yo, realizamos una familia de objetos y un gabinete que parten desde un sentimiento, deseo.',
                details: [
                    { image: pedirUnDeseo4 },
                ],
            },
            {
                description: 'Tomamos como inspiración el momento de soplar las velas en un cumpleaños, creando así, un pequeño ritual para pedir un deseo partiendo desde un candelabro, una vela y un apagador.',
                details: [
                    { image: pedirUnDeseo1 },
                ],
            },
            {
                description: 'Como primer objeto tenemos una vela de cera de soya, la cual es lo primero que se asoma cuando ves el gabinete, sin ella no puedes pedir un deseo.',
                details: [
                    { image: pedirUnDeseo6 },
                ],
            },
            {
                description: `Después está nuestro candelabro, elaborado totalmente de aluminio fundido, su propósito es sostener la vela mientras pedimos nuestro deseo.

                            Y por último el apagador, con el cual apagaremos la vela para que su humo lleve nuestro deseo a ser cumplido.`,
                details: [
                    { image: pedirUnDeseo3 },
                    { image: pedirUnDeseo5 },
                ],
            },
        ],
    },
    {
        id: 2,
        slug: 'amanecer',
        title: 'Amanecer',
        category: 'Producto',
        year: '2024',
        // Estructura con bloques separados
        blocks: [
            {
                description: 'Amanecer es un servilletero pensado para aportar estética y funcionalidad al comedor millennial sin comprometer el espacio.',
                details: [
                    { image: servilletero1 },
                ],
            },
            {
                description: 'Cuenta con una base y peso de piedra cantera y está elaborado de Celium™, un biomaterial de la empresa Polybion, el cual es una alternativa al cuero animal, elaborado de residuos de frutos como el mango.',
                details: [
                    { image: servilletero2 },
                ],
            },
            {
                description: 'Este servilletero está pensado para facilitar al usuario tomar una servilleta de manera que las demás no se salgan o puedan romperse, además de que busca ser una pieza destacable en tu comedor.',
                details: [
                    { image: servilletero3 },
                ],
            },
        ],
    },
    {
        id: 3,
        slug: 'seres-mutantes',
        title: 'Seres Mutantes',
        category: 'Producto',
        year: '2024',
        // Estructura con bloques separados
        blocks: [
            {
                description: 'Primera exploración visual del deseo y la luz mediante formas sencillas y materiales honestos.',
                details: [
                    { image: libelula1 },
                    { image: libelula2 },
                    { image: libelula3 },
                ],
            },
        ],
    },
    {
        id: 4,
        slug: 'toko',
        title: 'Toko',
        category: 'Producto',
        year: '2024',
        blocks: [
            {
                description: 'Es un instrumento de percusión pensado a partir de una multiherramienta, creado en el workshop Universo Material.',
                details: [
                    { image: toko1 }
                ],
            },
            {
                description: `Toko toma el concepto de supervivencia de la multiherramienta y lo traslada hacia la música, además de tomar su versatilidad y convertirla en formas y sonidos distintos.

                            Cuenta con un espacio para guardar una baquetita, con la cual puedes hacer uso de toko en cualquier lugar, pues está pensado para ser portátil.`,
                details: [
                    { image: toko2 },
                    { image: toko3 },
                ],
            },
        ],
    },
    {
        id: 5,
        slug: 'race-journal',
        title: 'Race Journal',
        category: 'Producto',
        year: '2024',
        blocks: [
            {
                description: 'Es una agenda pensada para los fanáticos del automovilismo, la cual les proporciona una forma práctica y divertida de registrar su pasión por la Fórmula 1.',
                details: [
                    { image: racejournal1 },
                ],
            },
            {
                description: `La Race Journal permite anotar eventos y recordatorios de tu día a día, además de fechas, tiempos y resultados de las carreras, convirtiéndose en una herramienta esencial para seguir cada carrera y llevar un historial organizado de la temporada. 

                            Fue publicada en Amazon en 2023 y posteriormente vendida por medio de tienda en línea. Actualmente he vendido más de 500 unidades en estos cuatro años.`,
                details: [
                    { image: racejournal3 },
                    { image: racejournal4 },
                ],
            },
        ],
    }
];

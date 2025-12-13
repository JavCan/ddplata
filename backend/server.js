// server.js (o server.ts)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend'; 

// Cargar variables de entorno
dotenv.config(); 

const app = express();
const port = process.env.PORT || 3001; // Asegúrate de que este puerto esté abierto y no sea el de React

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY); 

// --- CONFIGURACIÓN DE CORREOS ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const SENDER_DOMAIN = process.env.SENDER_DOMAIN;

// Middleware
// Permitir solicitudes CORS desde tu frontend de React (http://localhost:3000)
const allowedOrigins = [process.env.FRONTEND_ORIGIN];
app.use(cors({ origin: allowedOrigins })); 
app.use(express.json()); 

// Endpoint para manejar el formulario de contacto
app.post('/send-email', async (req, res) => {
    const { name, email, projectId, projectTitle } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Faltan nombre o correo electrónico.' });
    }
    
    // Almacenar las promesas de envío
    const sendPromises = [];

    // --- 1. NOTIFICACIÓN AL ADMINISTRADOR (TÚ) ---
    const adminEmailPromise = resend.emails.send({
        from: `Notificación <${SENDER_DOMAIN}>`,
        to: [ADMIN_EMAIL], 
        subject: `NUEVA SOLICITUD: "${projectTitle || 'Sin título'}" (${name})`,
        html: `
            <h3>Detalles de la solicitud:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo de Contacto:</strong> ${email}</p>
            <p><strong>Pieza:</strong> ${projectTitle || 'Sin título'}</p>
            <p><strong>ID de Pieza:</strong> ${projectId || ''}</p>
            <p>Responde a este correo para contactar al cliente.</p>
        `,
    });
    sendPromises.push(adminEmailPromise);


    // --- 2. CONFIRMACIÓN AL CLIENTE (USUARIO) ---
    const clientEmailPromise = resend.emails.send({
        from: `Danna Miranda <${SENDER_DOMAIN}>`,
        to: [email], 
        subject: `Confirmación de solicitud de información: "${projectTitle || 'Sin título'}"`,
        html: `
            <p>Hola ${name},</p>
            <p>¡Gracias por tu interés en "<strong>${projectTitle || 'Sin título'}</strong>"! Hemos recibido tu solicitud de información.</p>
            <p>Te contactaremos a la brevedad para brindarte detalles sobre especificaciones y disponibilidad.</p>
            <p>Atentamente,<br>Danna Miranda</p>
        `,
    });
    sendPromises.push(clientEmailPromise);
    
    // --- ENVÍO SIMULTÁNEO DE AMBOS CORREOS ---
    try {
        const results = await Promise.all(sendPromises);
        
        // Verificar si hubo algún error en los envíos individuales
        for (const result of results) {
            if (result.error) {
                console.error('Error en envío individual de Resend:', result.error);
                // A pesar del error individual, devolvemos 200 si al menos uno pudo haberse enviado. 
                // En un sistema robusto, manejarías esto con logs o reintentos.
            }
        }

        res.status(200).json({ message: 'Ambos correos procesados.', results: results });

    } catch (error) {
        // Error de conexión o servidor (antes de que Resend procese la solicitud)
        console.error("Error del servidor:", error);
        res.status(500).json({ error: 'Fallo interno al procesar el envío.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Node.js escuchando en puerto: ${port}`);
});
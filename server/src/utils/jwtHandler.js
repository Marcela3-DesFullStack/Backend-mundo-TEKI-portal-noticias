import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '';

// Generating token
export async function generateToken(userId) {
    try {
        // función que firma un token JWT usando el id y la clave secreta JWT_SECRET
        const token = jwt.sign({ userId }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION,
        });
        console.log("Token generado:", token);
        return token; // retorna token firmado
    } catch (error) {
        console.error("Error al generar el token:", error);
        throw error;
    }
}

// Verifying token
export async function verifyToken(req) {
    try {
        // // Obtener el token del encabezado de autorización
        const token = req.headers.authorization.split(' ')[1]; // Formato de encabezado "Bearer token"

        // Verificar el token y la clave secreta
        const isMatch = jwt.verify(token, JWT_SECRET);
        return isMatch;
    } catch (error) {
        console.error("Verified Token failed:", error);
        return false;
    }
}


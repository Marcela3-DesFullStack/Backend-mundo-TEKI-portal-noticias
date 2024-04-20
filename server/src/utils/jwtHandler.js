import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '';

// Generating token
export const generateToken = (id) => {
            // función que firma un token JWT usando el id y la clave secreta JWT_SECRET
        const JWT = jwt.sign({ id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION,
    });
        return JWT; // retorna token firmado
    
}

// Verifying token
export const verifyToken = async ( jwtToken ) => {
    try {
        //Veifying Token and secret key
        const decodedJWT = jwt.verify( jwtToken, JWT_SECRET );
        console.log("Token verificado:", decodedJWT);
        return decodedJWT;
    } catch (error) {
        return false;
    }
}


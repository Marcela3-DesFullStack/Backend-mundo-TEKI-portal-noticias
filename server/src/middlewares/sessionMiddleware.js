
import { verifyToken } from "../utils/jwtHandler.js";
import UsersModel from "../models/usersModel.js";


async function isAdmin(req, res, next) {
    try {
        //req.headers.authorization: access the authorization header of the HTTP request
        const jwtByUser = req.headers.authorization || "";
        //.split: divide la cadena jwtByUser en un array de subcadenas usando un espacio el espacio para separar
       //.pop: extrae y devuelve el último elemento del array resultante, es decir el token
        const jwt = jwtByUser.split(" ").pop() || "";
        // verify token and save into jwtPayLoad
        const jwtPayload = await verifyToken(jwt);
        if (!jwtPayload) {
            return res.status(401).json({message: "Not valid token"});
        }

        // Verifying into BD. Getting ID from payload token
        const payloadId = jwtPayload.id;
        // Query the database
        const loggedInUser = await UsersModel.getUserById(payloadId)

        const loggedInUserRole = loggedInUser?.role_id;
        
        if (loggedInUserRole !== 2) {
            return res.status(401).json({message: "Not valid permissions"});




        }
        next();
        return jwtPayload;
    } catch (e) {
        res.status(400);
    }
}

export { isAdmin };

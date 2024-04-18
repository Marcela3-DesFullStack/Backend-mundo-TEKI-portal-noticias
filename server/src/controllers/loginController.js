import UsersModel from '../models/usersModel.js';
import { generateToken, verifyToken } from '../utils/jwtHandler.js';
import { verify } from '../utils/passwEncrypt.js';

const LoginController = {
    loginUser: async (req, res) => {
        try {
            // Request of user´s fields
            const { password, email } = req.body;

            if (!password || !email) {
                return res.status(400).json({ message: 'Please enter information into all fields' });
            }

            // Looking for user by email
            const user = await UsersModel.getUserBy( email  );
            if (!user) {
                return res.status(404).json({ status: 'Error', message: 'User not found', redirect: '/users/register' });
            }

            // Verify user's password
            const passwordMatch = await verify(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ status: 'Error', message: 'Invalid password' });
            }

            // Generate a JWT token using the user's ID
            const token = generateToken(user.id);
            console.log("Token generado:", token);
            
            // Verify the generated JWT token
            const decodedToken = verifyToken(token);
            if (!decodedToken) {
                return res.status(400).json({ status: 'Error', message: 'Invalid token' });
            }
            

            // Send the JWT token as response
            return res.status(200).json({ message: 'User logged in successfully', token, userId: user.id, userName: user.username });
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error logging in' });
        }
    }
};

export default LoginController;

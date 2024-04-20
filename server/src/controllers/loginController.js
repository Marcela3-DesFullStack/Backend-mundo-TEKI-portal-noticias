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
                return res.status(404).json({ status: 'Error', message: 'User not found', redirect: 'http://localhost:3000/users/register' });
            }

            // Verify user's password
            const passwordMatch = await verify(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ status: 'Error', message: 'Invalid password' });
            }

            // Generate a JWT token using the user's ID
            const token =  generateToken(user.id);
            console.log("Token generado:", token);
            // Send the JWT token as response
            
            
          //Check if the user is an admin
            const allowedAdminRole = [2]; // Admin role
            
            if (allowedAdminRole.includes(user.role_id) ) {
                return res.status(401).json({message: "Welcome to Admin Page ," , token, userId: user.id, userName: user.username, role: user.role_id , redirect:"http://localhost:3000/admin"});
            
            }
            //Check if the user is an editor
            const allowedEditorRole = [1]; // Admin role
                        
            if (allowedEditorRole.includes(user.role_id) ) {
                return res.status(401).json({message: "Welcome to Editor Page ," , token, userId: user.id, userName: user.username, role: user.role_id , redirect:"http://localhost:3000/editor"});

            }

            //Send the JWT token as response for non-admin users
            return res.status(200).json({ message: 'User logged in successfully', token: token, userId: user.id, userName: user.username, role: user.role_id });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error logging in' });
        }
    }
};
export default LoginController;

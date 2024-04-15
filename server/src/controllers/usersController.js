import UsersModel from "../models/usersModel.js";
import { encrypt, verify } from "../utils/passwEncrypt.js";

const UsersController = {

    getAllUsers: async ( req , res ) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.json(users);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },
    
    getUser : async ( req , res ) => {
        try {
            const { id } = req.params;
            const user= await UsersModel.getUser(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },
    addUser : async (req, res) => {
        try {
            const { username, email, password , is_active, role_id } = req.body;
                if ( !username || !email || !password ) {
                    res.status(400).json({ message: 'Please enter complete information from user' });
                    return;
                    }
                     // Getting encrypted password
                    const passwEncrypt = await encrypt( password );
                    console.log(passwEncrypt);
                    const newUser = await UsersModel.addUser( username, email, passwEncrypt , is_active, role_id );
                    console.log(newUser);
                    res.status(201).json({ message: 'User created succeeded', redirect:"/"});
                                       
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible create user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { username, email, password , is_active, role_id } = req.body;
                if ( !username || !email || !password ) {
                    res.status(400).json({ message: 'Please enter complete information from user' });
                    return;
                  
                } 
                await UsersModel.updateUser( id, req.body );
                res.status(201).json({ message: 'User up to date' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible updating user' });
        }
    },
    deleteUser : async (req, res) => {
        try {
            const { id } = req.params;
            const deleteUser = await UsersModel.deleteUser(id);
                res.status(404).json({ message: 'User deleted' });
            }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error to try deleting user' });
        }
    },
    // User´s Login and authentication
    loginUser : async (req , res ) => {
        try {
            // // Request of user´s fields
            const password = req.body.password;
            const email = req.body.email;
            if ( !password || !email ) {
                res.status(404).json({ message: 'Please enter information into all fields'});
                return;
            }
            // Are there user?
            const verifyUser = await UsersModel.getUserBy( username, password );// se pide password para evitar ataques de seguridad
            if (!verifyUser){
                return res.status(400).send({status: "Error", message:"Error when logging in"});
            }
            // Verifying Password (hash)
            const loginVerified = await verify(password, verifyUser.password);
            console.log(loginVerified);

        } 
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error when you logged in' });
        }
            
        }
    
    

    }








export default UsersController;
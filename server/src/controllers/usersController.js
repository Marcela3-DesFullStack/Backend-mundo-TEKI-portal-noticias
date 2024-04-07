import UsersModel from "../models/usersModel.js";

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
                if ( !username || !email || !password || is_active || role_id ) {
                    res.status(400).json({ message: 'Please enter complete information from user' });
                    return;
                  
                } 
                await UsersModel.addUser( req.body );
                res.status(201).json({ message: 'User created succeeded' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible create user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { username, email, password , is_active, role_id } = req.body;
                if ( !username || !email || !password || is_active || role_id ) {
                    res.status(400).json({ message: 'Please enter complete information from user' });
                    return;
                  
                } 
                await UserModel.updateUser( id, req.body );
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

}
    export default UsersController;
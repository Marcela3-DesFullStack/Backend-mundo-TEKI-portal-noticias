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
    }
}
    export default UsersController;
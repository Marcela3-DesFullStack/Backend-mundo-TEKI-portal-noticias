import connectionPrisma from "../database/dbprisma.js";

const UsersModel = {

    getAllUsers: async () => {
        const users = await connectionPrisma.users.findMany();
        return users;
    },

    getUser: async (id) => {
        const userId = parseInt(id)
        const user = await connectionPrisma.users.findFirst({
            
            where: {
                id: userId ,
               }, 
        });
        return user;
    },

    getUserBy: async (username, email) => {
        const user = await connectionPrisma.users.findFirst ({
            where: {
                OR: [
                    {username: username},
                    { email: email}
                ]
            }
        });
        return user;
    },

    addUser : async (body) => {
        body.created_at = new Date(); 
        const newUser = await connectionPrisma.users.create({
            data:  body
        })
        return newUser
    },

    updateUser: async (id, body) => {
        body.created_at = new Date();
        const userId = parseInt(id);
        const updateUser= await connectionPrisma.users.update({
            where: {
                id: userId ,
                
               }, 
            data: body
        });
        return updateUser;
    },
    
    deleteUser: async (id) => {
        const userId = parseInt(id);
        const deleteUser = await connectionPrisma.users.delete({
            where: {
                id: userId ,
                }, 
        });
        return deleteUser;
    },
}

export default UsersModel
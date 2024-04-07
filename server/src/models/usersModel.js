import connectionPrisma from "../database/dbprisma.js";

const UsersModel = {

    getAllUsers: async () => {
        const users = await connectionPrisma.users.findMany();
        return users
    },

    getUser: async (id) => {
        const userId = parseInt(id)
        const user = await connectionPrisma.users.findUnique({
            
            where: {
                id: userId ,
               }, 
        });
        // const [user] = await connection.query(`SELECT * FROM users WHERE id = '${id}'`);
        return user;
    },
}
export default UsersModel
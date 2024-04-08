import connectionPrisma from "../database/dbprisma.js";


const CommentsModel = {

    getAllComments: async () => {
        const comments = await connectionPrisma.comments.findMany();
        return comments
    },

    getComment: async (id) => {
        const commentId = parseInt(id);
        const comment = await connectionPrisma.comments.findUnique({
            
            where: {
                id: commentId ,
               }, 
        });
        return comment;
    },

    addComment: async (body) => {
        body.created_at = new Date(); 
        const newComment = await connectionPrisma.comments.create({
            data:  body
        })
        return newComment
    },


    deleteComment: async (id) => {
        const deleteId = parseInt(id);
        const deleteComment = await connectionPrisma.comments.delete({
            where: {
                id: deleteId ,
                }, 
        });
        return deleteComment;
    },

};
export default CommentsModel;
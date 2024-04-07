import connectionPrisma from "../database/dbprisma.js";


const PostsModel = {

    getAllPosts: async () => {
        const posts = await connectionPrisma.posts.findMany();
        return posts
    },

    getPost: async (id) => {
        const postId = parseInt(id);
        const post = await connectionPrisma.posts.findUnique({
            
            where: {
                id: postId ,
               }, 
        });
        return post;
    },

    addPost: async (body) => {
        body.created_at = new Date(); 
        const newPost = await connectionPrisma.posts.create({
            data:  body
        })
        return newPost
    },

    updatePost: async (id, body) => {
        body.created_at = new Date();
        const postId = parseInt(id);
        const updatePost = await connectionPrisma.posts.update({
            where: {
                id: postId ,
                
               }, 
            data: body
        });
        return updatePost;
    },

    deletePost: async (id) => {
        const postId = parseInt(id);
        const deletePost = await connectionPrisma.posts.delete({
            where: {
                id: postId ,
                }, 
        });
        return deletePost;
    },

};
export default PostsModel;
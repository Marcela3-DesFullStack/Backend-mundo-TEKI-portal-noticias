import PostsModel from "../models/postsModel.js";

const PostsController = {

    getAllPosts: async ( req , res ) => {
        try {
            const posts = await PostsModel.getAllPosts();
            res.json(posts);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    getPost : async (req, res) => {
        try {
            const { id } = req.params;
            const post = await PostsModel.getPost(id);
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    addPost : async (req, res) => {
        try {
            const { title, content, author, image_id, user_id, category_id } = req.body;
                if ( !title || !content || !author || !image_id || !user_id || !category_id ) {
                    res.status(400).json({ message: 'Please enter complete information from post' });
                    return;
                  
                } 
                await PostsModel.addPost( req.body );
                res.status(201).json({ message: 'Post created succeeded' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible add post' });
        }
    },

    updatePost : async (req, res) => {
        try {
            const { id } = req.params;
            const { title, content, author, image_id, user_id, category_id } = req.body;
                if ( !title || !content || !author || !image_id || !user_id || !category_id) {
                    res.status(400).json({ message: 'Please enter complete information from post' });
                    return;
                  
                } 
                await PostsModel.updatePost( id, req.body );
                res.status(201).json({ message: 'Post up to date' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible updating post' });
        }
    },
    deletePost : async (req, res) => {
        try {
            const { id } = req.params;
            const deletePost = await PostsModel.deletePost(id);
                res.status(404).json({ message: 'Post deleted' });
            }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error to try deleting post' });
        }
    },

}
export default PostsController;
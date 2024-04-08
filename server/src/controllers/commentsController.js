import CommentsModel from "../models/commentsModel.js";

const CommentsController = {

    getAllComments: async ( req , res ) => {
        try {
            const comments = await CommentsModel.getAllComments();
            res.json(comments);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },
    
    getComment : async ( req , res ) => {
        try {
            const { id } = req.params;
            const comment = await CommentsModel.getComment(id);
            if (comment) {
                res.json(comment);
            } else {
                res.status(404).json({ message: 'Comment not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    
    deleteComment : async (req, res) => {
        try {
            const { id } = req.params;
            const deleteComment = await CommentsModel.deleteComment(id);
                res.status(404).json({ message: 'Comment deleted' });
            }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error to try deleting comment' });
        }
    },

}
    export default CommentsController;
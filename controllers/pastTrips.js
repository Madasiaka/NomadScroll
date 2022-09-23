const Post = require("../models/Post");

module.exports = {
    getPastTrips: async (req, res) => {
      try {
      const posts = await Post.find({ user: req.user.id} ).lean();
      let pastTripsList = 0
      res.render("pastTrips.ejs", { posts: posts, user: req.user, pastTripsList: pastTripsList });
      } catch (err) {
        console.log(err);
      }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({createdAt: 'desc'}).lean()
      res.render("post.ejs", { post: post, user: req.user, comments: comments});
    } catch (err) {
      console.log(err);
    }
  },
  };
  
const Post = require("../models/Post");

module.exports = {
    getPastTrips: async (req, res) => {
      try {
      const posts = await Post.find({ user: req.user.id} ).lean();
      res.render("pastTrips.ejs", { posts: posts, user: req.user });
      } catch (err) {
        console.log(err);
      }
  },
  };
  
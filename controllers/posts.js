const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment")
const User = require("../models/User");

module.exports = {
  getHome: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("home.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getAddTrip: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("addTrip.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" })
      .populate('user')
      .lean();
      res.render("feed.ejs", { posts: posts, user: req.user, userName: req.userName });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({createdAt: 'desc'}).populate('user').lean()

      res.render("post.ejs", { post: post, user: req.user, comments: comments});
    } catch (err) {
      console.log(err);
    }
  },
  
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        hostelName: req.body.hostelName,
        city: req.body.city,
        formattedAddress: req.body.formattedAddress,
        coordinates: req.body.coordinates,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        review: req.body.review,
        quickReview: req.body.quickReview,
        friendsMet: req.body.friendsMet,
        user: req.user.id,
        userName: req.user,
      });
      console.log("Post has been added!");
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  dislikePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1 },
        }
      );
      console.log("Dislikes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/pastTrips");
    } catch (err) {
      res.redirect("/home");
    }
  },
};

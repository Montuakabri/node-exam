const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  const articles = await Article.find().populate("author");
  res.render("articleList", { articles });
};

exports.getMyArticles = async (req, res) => {
  const articles = await Article.find({ author: req.user.userId });
  res.render("myArticles", { articles });
};

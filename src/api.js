import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-1.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

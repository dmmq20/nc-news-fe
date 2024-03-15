import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-1.onrender.com/api",
});

export const getAllArticles = (topic, more, params) => {
  const config = {
    params: {
      p: 1,
      limit: 6 * more,
      topic,
      sort_by: params.get("sort_by"),
      order: params.get("order"),
    },
  };
  return api.get("/articles", config).then(({ data }) => {
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

export const updateArticleVotes = (article_id, body) => {
  return api.patch(`/articles/${article_id}`, body).then(({ data }) => {
    return data.article;
  });
};

export const addArticleComment = (article_id, body) => {
  return api.post(`/articles/${article_id}/comments`, body).then(({ data }) => {
    return data.comment;
  });
};

export const deleteArticleComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const getAllTopics = () => {
  return api.get("/topics").then(({ data }) => data.topics);
};

export const getAllUsers = () => {
  return api.get("/users").then(({ data }) => data.users);
};

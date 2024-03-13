import { useEffect } from "react";
import { useState } from "react";
import { getAllTopics } from "../api";
import { Link } from "react-router-dom";
import "/src/components/styles/Topics.css";

const Topics = ({ toggleMenu }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <ul>
      <Link to={`/`} className="li-link">
        <li onClick={toggleMenu}>all</li>
      </Link>
      {topics.map((topic) => (
        <Link
          className="li-link"
          key={topic.slug}
          to={`/articles/${topic.slug}`}
        >
          <li onClick={toggleMenu}>{topic.slug}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Topics;

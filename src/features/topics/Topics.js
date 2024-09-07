import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopics } from "./topicsSlice"; // My contribution.
import { useSelector } from "react-redux"; // My contribution.

export default function Topics() {
  const topics = useSelector(selectTopics); // My contribution. LESSON LEARNED: I was running into errors, and it turned out to be because I was using the selector directly in this constant declaration; I had forgotten to use useSelector().

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}

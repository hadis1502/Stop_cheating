import React from 'react';
import './components.css';

const NewsList = ({ newsItems }) => {
  return (
    <section className="news-list">
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <time>{item.date}</time>
        </div>
      ))}
    </section>
  );
};

export default NewsList;

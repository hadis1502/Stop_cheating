import React from 'react';
import './components.css';

const NewsList = ({ newsItems }) => {
  return (
    <section className="news-list">
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <a href={item.link} target="_blank"><h4>{item.title}</h4></a>
          <time>{item.date}</time>
        </div>
      ))}
    </section>
  );
};

export default NewsList;

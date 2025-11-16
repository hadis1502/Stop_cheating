import React from 'react';
import './components.css';

const ArticleCard = ({ title, excerpt }) => {
  return (
     <div className="article-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
      
    
  );
};

export default ArticleCard;

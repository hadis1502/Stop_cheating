import React from 'react';
import './components.css';

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo"></div>
      <nav className="menu">
        <a href="#home">Main</a>
        
      </nav>
      <button className="report-btn"><a href="https://forms.yandex.ru/u/691a223ef47e7319cfbe6bb4/" target='_blank'>Inform</a></button>
    </header>
  );
};

export default Header;

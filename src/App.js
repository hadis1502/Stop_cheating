import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import ArticleCard from './components/ArticleCard';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import ModalArticle from './components/ModalArticle'




const App = () => {
  

  // Данные для новостной ленты1
  const news = [
    {
      title: 'Roof repair scam nearly cost pensioner £80,000',
      link: 'https://www.bbc.com/news/articles/cpq1gejx09wo',
      date: '2025-11-15'
    },
    {
      title: 'North Vancouver seniors warn of phone scam that cost them $120,000',
      link: 'https://vancouver.citynews.ca/2025/11/14/north-vancouver-seniors-warn-of-phone-scam-that-cost-them-120000/',
      date: '2025-11-14'
    },
    {
      title: 'Four Dominican Men Extradited to the United States for Allegedly Operating Elder Fraud Scheme',
      link: 'https://www.justice.gov/usao-ma/pr/four-dominican-men-extradited-united-states-allegedly-operating-elder-fraud-scheme',
      date: '2025-11-13'
    }
    
  ];

  

  return (
    <div className="app">
      <Header />
      <MainScreen />
      
      <section className="articles-section">
        <h2>Popular notes</h2>
       
          <div className="articles-container">
         <ModalArticle />
         </div>
         
       
      </section>

      <section className="news-section">
        <h2>Latest news</h2>
        <NewsList newsItems={news} />
      </section>

      <Footer />
    </div>
  );
};

export default App;

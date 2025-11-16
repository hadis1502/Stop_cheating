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
      title: 'News 1',
      content: `The number of pensioners affected by fraud has increased in Russia.\n
       According to the Cyber Police, the attackers promise payments to labor veterans.`,
      date: '2025-11-15'
    },
    {
      title: 'News 2',
      content: 'The Interior Ministry told about a new scheme of fraud with awards for pensioners',
      date: '2025-11-14'
    },
    {
      title: 'News 3',
      content: 'Interior Ministry: fraudsters call pensioners on behalf of City Hall staff',
      date: '2025-11-13'
    }
  ];

  

  return (
    <div className="app">
      <Header />
      <MainScreen />
      
      <section className="articles-section">
        <h2>Popular memos</h2>
       
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

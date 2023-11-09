import React from 'react'


function News() {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('0ab7edb309fb4cb3b4fc7df226f50862');

    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
      })
      .then((response:any) => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      })
      .catch(() => {
        console.log("error")
      });
  return (
    <div>News</div>
  )
}

export default News
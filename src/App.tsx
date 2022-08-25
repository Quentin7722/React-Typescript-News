import { FC, useEffect, useState } from "react";
import "./App.css";
import { Article } from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { ArticleInterface } from "./Interfaces";

const App: FC = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const [requestUrl, setRequestUrl] = useState<string>(
    `https://newsapi.org/v2/everything?language=fr&domains=mediapart.fr,lemonde.fr,journaldugeek.com,artpress.com,lexpress.fr&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  useEffect(() => {
    fetch(requestUrl as string)
      .then((res) => res.json())
      .then((res) => setArticles(res.articles))
      .catch((err) => console.log(err));
  }, [requestUrl]);

  return (
    <div className="App">
      <Header requestUrl={requestUrl} setRequestUrl={setRequestUrl} />
      <div className="articles">
        {articles.map((article) => {
          return (
            article.urlToImage &&
            article.urlToImage.length > 2 && (
              <Article
                key={article.url}
                title={article.title}
                description={article.description}
                author={article.author}
                publishedAt={article.publishedAt}
                urlToImage={article.urlToImage}
                url={article.url}
                source={article.source}
              />
            )
          );
        })}
      </div>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default App;

import { FC } from "react";
import { ArticleInterface } from "../../Interfaces";
import "./Article.css";

export const Article: FC<ArticleInterface> = ({
  title,
  description,
  urlToImage,
  url,
  source,
}) => {
  return (
    <div className="card">
      <img src={urlToImage} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description.replace(/(<([^>]+)>)/gi, "")}</p>
        <span className="journal">{source.name}</span>
        <a href={url} target="_blank" rel="noreferrer">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

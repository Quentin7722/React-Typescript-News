import React, { MouseEvent, useRef, useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { HeaderInterface } from "../../Interfaces";
import { date, lang } from "../../constants/constants";

export function Header({ requestUrl, setRequestUrl }: HeaderInterface) {
  const [toggleButtonClass, setToggleButtonClass] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("français");
  const [title, setTitle] = useState<string>("L'actualité du");
  const inputRef = useRef<HTMLInputElement>(null);

  if (toggleButtonClass === true) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const toggleButtonFct = (event: MouseEvent<HTMLParagraphElement>) => {
    setToggleButtonClass(!toggleButtonClass);
  };

  const toggleFlag = (event: MouseEvent<HTMLImageElement>) => {
    let dataCountry: string = event.currentTarget.getAttribute("data-country")!;
    setCountry(dataCountry);
    switch (dataCountry) {
      case "français":
        setRequestUrl(
          `https://newsapi.org/v2/everything?language=fr&domains=mediapart.fr,lemonde.fr,journaldugeek.com,artpress.com,lexpress.fr&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTitle("L'actualité du");
        break;
      case "anglais":
        setRequestUrl(
          `https://newsapi.org/v2/everything?language=en&domains=bbc.com,theguardian.com,nytimes.com,time.com,washingtonpost.com&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTitle("News from");
        break;
      case "russe":
        setRequestUrl(
          `https://newsapi.org/v2/everything?language=ru&domains=ura.news,dtf.ru,sports.ru&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTitle("новости");
        break;
      case "espagnol":
        setRequestUrl(
          `https://newsapi.org/v2/everything?language=es&domains=elmundo.es,as.com,elconfidencial.com,elcorreo.com,jornada.com.mx&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTitle("Actualidad del día");
        break;
    }

    setToggleButtonClass(!toggleButtonClass);
  };

  const searchKeyword = (
    event: MouseEvent<SVGAElement> | React.SyntheticEvent
  ) => {
    event.preventDefault();
    if (inputRef.current != null) {
      setRequestUrl(
        requestUrl.slice(0, 46) +
          `q=${inputRef.current.value}&` +
          requestUrl.slice(46)
      );
    }
  };

  return (
    <div className="header">
      <h1>
        {title} {date}
      </h1>
      <form className="container-input" onSubmit={searchKeyword}>
        <input type="text" placeholder="Rechercher..." ref={inputRef} />
        <BsSearch className="icon" onClick={searchKeyword} />
      </form>
      <p
        className={toggleButtonClass ? "toggle-button" : "toggle-button active"}
        onClick={toggleButtonFct}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </p>
      <div className={toggleButtonClass ? "settings" : "settings active"}>
        <span>Pays :</span>
        <div className="flags">
          {lang.map((flag) => {
            return (
              <img
                key={flag.lang}
                src={flag.src}
                className={country === flag.lang ? "flag active" : "flag"}
                data-country={flag.lang}
                onClick={toggleFlag}
                alt={flag.lang}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import français from "../assets/fr.png";
import anglais from "../assets/uk.png";
import russe from "../assets/ru.png";
import espagnol from "../assets/es.png";

let today = new Date();
let day = today.getDate().toString();
let month = (today.getMonth() + 1).toString();
let year = today.getFullYear();
if (month.length < 2) {
  month = "0" + month;
}
if (day.length < 2) {
  day = "0" + today.getDate();
}
let date = day + "-" + month + "-" + today.getFullYear();
const lang = [
  { lang: "français", src: français },
  { lang: "anglais", src: anglais },
  { lang: "russe", src: russe },
  { lang: "espagnol", src: espagnol },
];

export { today, month, day, date, year, lang };

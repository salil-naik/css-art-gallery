import style from "./style.module.css";
import { Credit } from "../../components/Credit/index";

function SrishtiGuleriaRound() {
  // Enter your name, github url and art-name below
  let data = {
    name: "Srishti Guleria",
    "gh-link": "https://github.com/sg7801",
    "art-name": "Round Animation",
  };
  return (
    <div className={`${style.container} container`}>
      {/* DO NOT edit the line above*/}

      {/* your art blocks will come here */}
      <div className={style.square}>
       <span></span>
       <span></span>
       <span></span>
      </div>
      {/* do not edit the line below */}
      <Credit data={data} />
    </div>
  );
}

export default SrishtiGuleriaRound;
